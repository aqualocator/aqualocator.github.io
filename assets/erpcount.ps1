$lines = Get-Content "$PSScriptRoot\EmployeeStatus.csv"
$total = 0
for ($i = 9; $i -le 36; $i++) {
    if ($lines[$i] -match '^Emp ID,(.+),(\d+)') { $total += [int]$Matches[2] }
}
Write-Host "Sum of dept counts from ERP header: $total"

$startIdx = 0
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '^FIRSTNM,LASTNM') { $startIdx = $i + 1; break }
}
$empRows = $lines[$startIdx..($lines.Count-1)] | Where-Object { $_.Trim() -ne "" }
Write-Host "Employee data rows in file: $($empRows.Count)"
