$es = Import-Csv "$PSScriptRoot\EmployeeStatus.csv"
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
foreach ($r in $es) { $k = NormLast $r.LastName; if(-not $esByLast[$k]){$esByLast[$k]=@()}; $esByLast[$k]+=$r }
$fbByLast = @{}
foreach ($r in $fb) { $k = NormLast $r.Last; if(-not $fbByLast[$k]){$fbByLast[$k]=@()}; $fbByLast[$k]+=$r }

$esNoMatch = @()
foreach ($r in $es) {
    $k = NormLast $r.LastName; $found = $false
    if ($fbByLast[$k]) { foreach ($f in $fbByLast[$k]) { if (DoMatch $f.First $r.FirstName) { $found=$true; break } } }
    if (-not $found) { $esNoMatch += $r }
}

$fbNoMatch = @()
foreach ($r in $fb) {
    $k = NormLast $r.Last; $found = $false
    if ($esByLast[$k]) { foreach ($e in $esByLast[$k]) { if (DoMatch $r.First $e.FirstName) { $found=$true; break } } }
    if (-not $found) { $fbNoMatch += $r }
}

Write-Host "ERP total: $($es.Count)   Firebase total: $($fb.Count)"
Write-Host ""
Write-Host "=== IN ERP BUT MISSING FROM FIREBASE ($($esNoMatch.Count)) ==="
$esNoMatch | Sort-Object LastName,FirstName | ForEach-Object { Write-Host "  $($_.FirstName) $($_.LastName)  [$($_.DeptDesc)]" }
Write-Host ""
Write-Host "=== IN FIREBASE BUT NOT IN ERP ($($fbNoMatch.Count)) ==="
$fbNoMatch | Sort-Object Last,First | ForEach-Object { Write-Host "  '$($_.name)'  [dept=$($_.dept)]" }
