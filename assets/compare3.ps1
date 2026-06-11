$fb = Import-Csv "$PSScriptRoot\aqualocator-employees-2026-06-10.csv"
$es = Import-Csv "$PSScriptRoot\EmployeeStatus.csv"

Write-Host "=== Rows excluded by 'responsibilities = XXX' filter ==="
$xxx = $fb | Where-Object { $r = $_; $r.responsibilities -and $r.responsibilities.Trim() -eq 'XXX' }
if ($xxx.Count -eq 0) { Write-Host "  (none)" } else { $xxx | ForEach-Object { Write-Host "  name='$($_.name)' dept='$($_.dept)'" } }

Write-Host ""
$renderable = $fb | Where-Object {
    $r = $_
    $n = if ($r.name) { $r.name.Trim() } else { "" }
    $resp = if ($r.responsibilities) { $r.responsibilities.Trim() } else { "" }
    $n -ne "" -and $n.ToLower() -ne "n/a" -and $resp -ne "XXX"
}
Write-Host "Firebase raw rows        : $($fb.Count)"
Write-Host "After XXX+blank filter   : $($renderable.Count)  <-- what AquaLocator ACTUALLY renders"
Write-Host "ERP active employees     : $($es.Count)"
Write-Host "Gap (ERP - AquaLocator)  : $($es.Count - $renderable.Count)"
