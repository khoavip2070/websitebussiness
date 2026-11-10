# KWeb Studio - Minimize Window Helper (PowerShell fallback)
$exePath = Join-Path $PSScriptRoot "kweb_window.exe"
if (Test-Path $exePath) {
    & $exePath min
    exit 0
}

Add-Type -TypeDefinition @"
using System;
using System.Text;
using System.Runtime.InteropServices;

public class WinStationMin {
    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern IntPtr OpenWindowStation(string lpszWinSta, bool fInherit, uint dwDesiredAccess);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool SetProcessWindowStation(IntPtr hWinSta);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern IntPtr OpenDesktop(string lpszDesktop, uint dwFlags, bool fInherit, uint dwDesiredAccess);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool SetThreadDesktop(IntPtr hDesktop);

    [DllImport("user32.dll")]
    public static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);

    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    public static extern int GetWindowTextW(IntPtr hWnd, StringBuilder lpString, int nMaxCount);

    [DllImport("user32.dll")]
    public static extern bool IsWindowVisible(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);

    [DllImport("user32.dll")]
    public static extern bool PostMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);

    public const uint GENERIC_ALL = 0x10000000;
    public const uint WM_SYSCOMMAND = 0x0112;
    public const uint SC_MINIMIZE = 0xF020;
    public const int SW_MINIMIZE = 6;

    public static void MinimizeTarget() {
        try {
            IntPtr hWinsta = OpenWindowStation("WinSta0", false, GENERIC_ALL);
            if (hWinsta != IntPtr.Zero) {
                SetProcessWindowStation(hWinsta);
                IntPtr hDesk = OpenDesktop("Default", 0, false, GENERIC_ALL);
                if (hDesk != IntPtr.Zero) {
                    SetThreadDesktop(hDesk);
                }
            }
        } catch {}

        EnumWindows((hWnd, lParam) => {
            if (IsWindowVisible(hWnd)) {
                StringBuilder sb = new StringBuilder(512);
                GetWindowTextW(hWnd, sb, 512);
                string title = sb.ToString();
                if (!string.IsNullOrEmpty(title) && title.IndexOf("KWeb Studio", StringComparison.OrdinalIgnoreCase) >= 0) {
                    PostMessage(hWnd, WM_SYSCOMMAND, (IntPtr)SC_MINIMIZE, IntPtr.Zero);
                    ShowWindowAsync(hWnd, SW_MINIMIZE);
                }
            }
            return true;
        }, IntPtr.Zero);
    }
}
"@ -ErrorAction SilentlyContinue

try {
    [WinStationMin]::MinimizeTarget()
} catch {}
