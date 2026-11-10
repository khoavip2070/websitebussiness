# KWeb Studio - Close Window Helper
$exePath = Join-Path $PSScriptRoot "kweb_window.exe"
if (Test-Path $exePath) {
    & $exePath close
}

Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like "*kweb_desktop_profile*" } | ForEach-Object {
    Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
}
