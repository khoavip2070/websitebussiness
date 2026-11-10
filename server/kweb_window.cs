using System;
using System.Text;
using System.Runtime.InteropServices;

class WindowController {
    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

    [DllImport("user32.dll", SetLastError = true)]
    static extern IntPtr OpenWindowStation(string lpszWinSta, bool fInherit, uint dwDesiredAccess);

    [DllImport("user32.dll", SetLastError = true)]
    static extern bool SetProcessWindowStation(IntPtr hWinSta);

    [DllImport("user32.dll", SetLastError = true)]
    static extern IntPtr OpenDesktop(string lpszDesktop, uint dwFlags, bool fInherit, uint dwDesiredAccess);

    [DllImport("user32.dll", SetLastError = true)]
    static extern bool SetThreadDesktop(IntPtr hDesktop);

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

    const uint GENERIC_ALL = 0x10000000;
    const uint WM_SYSCOMMAND = 0x0112;
    const uint SC_MINIMIZE = 0xF020;
    const uint SC_MAXIMIZE = 0xF030;
    const uint SC_RESTORE = 0xF120;
    const uint SC_CLOSE = 0xF060;
    const int SW_MINIMIZE = 6;
    const int SW_RESTORE = 9;
    const int SW_MAXIMIZE = 3;

    static void Main(string[] args) {
        string action = args.Length > 0 ? args[0].ToLowerInvariant() : "min";

        IntPtr hWinsta = OpenWindowStation("WinSta0", false, GENERIC_ALL);
        if (hWinsta != IntPtr.Zero) {
            SetProcessWindowStation(hWinsta);
            IntPtr hDesk = OpenDesktop("Default", 0, false, GENERIC_ALL);
            if (hDesk != IntPtr.Zero) {
                SetThreadDesktop(hDesk);
            }
        }

        int affected = 0;
        EnumWindows((hWnd, lParam) => {
            if (IsWindowVisible(hWnd)) {
                StringBuilder sb = new StringBuilder(512);
                GetWindowTextW(hWnd, sb, 512);
                string title = sb.ToString();
                
                // Match KWeb Studio window
                if (!string.IsNullOrEmpty(title) && title.IndexOf("KWeb Studio", StringComparison.OrdinalIgnoreCase) >= 0) {
                    Console.WriteLine("Target window found: " + title + " (HWND: " + hWnd + ")");
                    affected++;
                    if (action == "min" || action == "minimize") {
                        PostMessage(hWnd, WM_SYSCOMMAND, (IntPtr)SC_MINIMIZE, IntPtr.Zero);
                        ShowWindowAsync(hWnd, SW_MINIMIZE);
                        Console.WriteLine("Action MINIMIZE dispatched successfully.");
                    } else if (action == "max" || action == "maximize") {
                        PostMessage(hWnd, WM_SYSCOMMAND, (IntPtr)SC_MAXIMIZE, IntPtr.Zero);
                        ShowWindowAsync(hWnd, SW_MAXIMIZE);
                        Console.WriteLine("Action MAXIMIZE dispatched successfully.");
                    } else if (action == "restore") {
                        PostMessage(hWnd, WM_SYSCOMMAND, (IntPtr)SC_RESTORE, IntPtr.Zero);
                        ShowWindowAsync(hWnd, SW_RESTORE);
                        Console.WriteLine("Action RESTORE dispatched successfully.");
                    } else if (action == "close") {
                        PostMessage(hWnd, WM_SYSCOMMAND, (IntPtr)SC_CLOSE, IntPtr.Zero);
                        Console.WriteLine("Action CLOSE dispatched successfully.");
                    }
                }
            }
            return true;
        }, IntPtr.Zero);

        Console.WriteLine("Total target windows affected: " + affected);
    }
}
