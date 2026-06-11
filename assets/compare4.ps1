# Parse the new EmployeeStatus.csv format (skip header blocks, start at FIRSTNM row)
$esRaw = Get-Content "$PSScriptRoot\EmployeeStatus.csv"
$startLine = ($esRaw | Select-String "^FIRSTNM,LASTNM").LineNumber  # 1-based

$esData = $esRaw[($startLine)..($esRaw.Count - 1)] | Where-Object { $_.Trim() -ne "" }
$es = $esData | ConvertFrom-Csv -Header @("FIRSTNM","LASTNM","Department1","USERACCOUNTSTATUS","COMPANYHIREDTM","YearsOfService","HireDate","HireDate1")

$fb = Import-Csv "$PSScriptRoot\aqualocator-employees-2026-06-10.csv"

function NormLast($n) { ($n.Trim().ToLower() -replace '\s+(jr\.?|sr\.?|ii|iii)$','') -replace '[-\s]','' }
function NormFirst($n) {
    $n = $n.Trim().ToLower() -replace '[^a-z]',''
    $map = @{
        tim='timothy'; dan='daniel'; jim='james'; bill='william'; joe='joseph'; bob='robert'
        brad='bradley'; dave='david'; nick='nicholas'; tom='thomas'; tony='anthony'
        jake='jacob'; ben='benjamin'; nate='nathan'; matt='matthew'; chris='christopher'
        alex='alexander'; zach='zachary'; zak='zachary'; josh='joshua'; pam='pamela'
        chuck='charles'; charlie='charles'; ed='edward'; edi='edward'; rick='richard'
        joey='joseph'; barb='barbara'; cathy='catherine'; steve='steven'
        jamey='james'; sam='samuel'; jon='jonathan'; mike='michael'; ari='aridane'
    }
    if ($map[$n]) { return $map[$n] }
    return $n
}
function DoMatch($f1,$f2) {
    $a = NormFirst $f1; $b = NormFirst $f2
    return ($a -eq $b) -or $b.StartsWith($a) -or $a.StartsWith($b)
}

$esByLast = @{}
foreach ($r in $es) { $k = NormLast $r.LASTNM; if(-not $esByLast[$k]){$esByLast[$k]=@()}; $esByLast[$k]+=$r }
$fbByLast = @{}
foreach ($r in $fb) { $k = NormLast $r.Last; if(-not $fbByLast[$k]){$fbByLast[$k]=@()}; $fbByLast[$k]+=$r }

$esNoMatch = @()
foreach ($r in $es) {
    $k = NormLast $r.LASTNM; $found = $false
    if ($fbByLast[$k]) { foreach ($f in $fbByLast[$k]) { if (DoMatch $f.First $r.FIRSTNM) { $found=$true; break } } }
    if (-not $found) { $esNoMatch += $r }
}

$fbNoMatch = @()
foreach ($r in $fb) {
    $k = NormLast $r.Last; $found = $false
    if ($esByLast[$k]) { foreach ($e in $esByLast[$k]) { if (DoMatch $r.First $e.FIRSTNM) { $found=$true; break } } }
    if (-not $found) { $fbNoMatch += $r }
}

# Firebase renderable count (excluding XXX)
$fbRenderable = @($fb | Where-Object {
    $r = $_
    $n = if ($r.name) { $r.name.Trim() } else { "" }
    $resp = if ($r.responsibilities) { $r.responsibilities.Trim() } else { "" }
    $n -ne "" -and $n.ToLower() -ne "n/a" -and $resp -ne "XXX"
})

Write-Host "ERP active employees     : $($es.Count)"
Write-Host "Firebase raw rows        : $($fb.Count)"
Write-Host "Firebase renderable      : $($fbRenderable.Count)  <-- AquaLocator displays this"
Write-Host "Gap (ERP - AquaLocator)  : $($es.Count - $fbRenderable.Count)"
Write-Host ""
Write-Host "=== IN ERP BUT NOT IN FIREBASE ($($esNoMatch.Count)) — need to ADD ==="
$esNoMatch | Sort-Object LASTNM,FIRSTNM | ForEach-Object { Write-Host "  $($_.FIRSTNM) $($_.LASTNM)  [$($_.Department1)]" }
Write-Host ""
Write-Host "=== IN FIREBASE BUT NOT IN ERP ($($fbNoMatch.Count)) — review/remove ==="
$fbNoMatch | Sort-Object Last,First | ForEach-Object { Write-Host "  '$($_.name)'  [dept=$($_.dept)]" }
