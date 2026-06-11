# Parse EmployeeStatus.csv (active) - skip header blocks
$esLines = Get-Content "$PSScriptRoot\EmployeeStatus.csv"
$esStart = 0
for ($i = 0; $i -lt $esLines.Count; $i++) { if ($esLines[$i] -match '^FIRSTNM,LASTNM') { $esStart = $i + 1; break } }
$esData = $esLines[$esStart..($esLines.Count-1)] | Where-Object { $_.Trim() -ne "" }
$es = $esData | ConvertFrom-Csv -Header @("FIRSTNM","LASTNM","Department1","Status","Hired","Tenure","HD","HD2")

# Parse EmployeeStatus_Inactive.csv - skip header blocks  
$inLines = Get-Content "$PSScriptRoot\EmployeeStatus_Inactive.csv"
$inStart = 0
for ($i = 0; $i -lt $inLines.Count; $i++) { if ($inLines[$i] -match '^FIRSTNM,LASTNM') { $inStart = $i + 1; break } }
$inData = $inLines[$inStart..($inLines.Count-1)] | Where-Object { $_.Trim() -ne "" }
$inactive = $inData | ConvertFrom-Csv -Header @("FIRSTNM","LASTNM","Department1","Status","Hired","Tenure","HD","HD2")

# Parse Firebase CSV
$fb = Import-Csv "$PSScriptRoot\aqualocator-employees-2026-06-10.csv"

function NormLast($n) { ($n.Trim().ToLower() -replace '\s+(jr\.?|jr|sr\.?|sr|ii|iii)$','') -replace '[-\s]','' }
function NormFirst($n) {
    $n = $n.Trim().ToLower() -replace '[^a-z]',''
    $map = @{ tim='timothy'; dan='daniel'; jim='james'; bill='william'; joe='joseph'
              bob='robert'; brad='bradley'; dave='david'; nick='nicholas'; tom='thomas'
              tony='anthony'; jake='jacob'; ben='benjamin'; nate='nathan'; matt='matthew'
              chris='christopher'; alex='alexander'; zach='zachary'; zak='zachary'
              josh='joshua'; pam='pamela'; chuck='charles'; charlie='charles'
              ed='edward'; edi='edward'; rick='richard'; joey='joseph'; barb='barbara'
              cathy='catherine'; steve='steven'; jamey='james'; sam='samuel'
              mike='michael'; ari='aridane'; jeff='jeffrey' }
    if ($map[$n]) { return $map[$n] }
    return $n
}
function DoMatch($f1, $f2) {
    $a = NormFirst $f1; $b = NormFirst $f2
    return ($a -eq $b) -or $b.StartsWith($a) -or $a.StartsWith($b)
}

$fbByLast = @{}
foreach ($r in $fb) {
    $k = NormLast $r.Last
    if (-not $fbByLast[$k]) { $fbByLast[$k] = @() }
    $fbByLast[$k] += $r
}

# ================================================================
# CHECK 1: Active in ERP but NOT found in Firebase
# ================================================================
Write-Host "================================================================"
Write-Host "ACTIVE CHECK: In ERP (active) but MISSING from Firebase"
Write-Host "These employees should be ADDED to Firebase"
Write-Host "================================================================"
$missing = @()
foreach ($r in $es) {
    $k = NormLast $r.LASTNM; $found = $false
    if ($fbByLast[$k]) {
        foreach ($f in $fbByLast[$k]) {
            if (DoMatch $f.First $r.FIRSTNM) { $found = $true; break }
        }
    }
    if (-not $found) { $missing += $r }
}
if ($missing.Count -eq 0) {
    Write-Host "  (none - all active ERP employees are in Firebase)"
} else {
    $missing | Sort-Object LASTNM, FIRSTNM | ForEach-Object {
        Write-Host "  ADD: $($_.FIRSTNM) $($_.LASTNM)  [$($_.Department1)]  Hired: $($_.Hired)"
    }
}
Write-Host "  Total missing from Firebase: $($missing.Count)"

# ================================================================
# CHECK 2: In Firebase AND in Inactive list - should be REMOVED
# ================================================================
Write-Host ""
Write-Host "================================================================"
Write-Host "INACTIVE CHECK: In Firebase but found in ERP INACTIVE list"
Write-Host "These employees should be REMOVED from Firebase"
Write-Host "================================================================"
$inByLast = @{}
foreach ($r in $inactive) {
    $k = NormLast $r.LASTNM
    if (-not $inByLast[$k]) { $inByLast[$k] = @() }
    $inByLast[$k] += $r
}

$shouldRemove = @()
foreach ($r in $fb) {
    $k = NormLast $r.Last; $found = $false; $matchedInactive = $null
    if ($inByLast[$k]) {
        foreach ($i in $inByLast[$k]) {
            if (DoMatch $r.First $i.FIRSTNM) { $found = $true; $matchedInactive = $i; break }
        }
    }
    if ($found) { $shouldRemove += [PSCustomObject]@{ FBName=$r.name; FBDept=$r.dept; InactiveSince=$matchedInactive.HD } }
}
if ($shouldRemove.Count -eq 0) {
    Write-Host "  (none - no Firebase employees found in the inactive list)"
} else {
    $shouldRemove | Sort-Object FBName | ForEach-Object {
        Write-Host "  REMOVE: '$($_.FBName)'  [dept=$($_.FBDept)]  Inactive since: $($_.InactiveSince)"
    }
}
Write-Host "  Total to remove from Firebase: $($shouldRemove.Count)"

Write-Host ""
Write-Host "================================================================"
Write-Host "SUMMARY"
Write-Host "  ERP active:          $($es.Count)"
Write-Host "  Firebase rows:       $($fb.Count)"
Write-Host "  Need to ADD:         $($missing.Count)"
Write-Host "  Need to REMOVE:      $($shouldRemove.Count)"
Write-Host "================================================================"
