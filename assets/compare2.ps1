$fb = Import-Csv "$PSScriptRoot\aqualocator-employees-2026-06-10.csv"
$es = Import-Csv "$PSScriptRoot\EmployeeStatus.csv"

Write-Host "=== Firebase rows with blank/N/A name (counted in raw total but NOT rendered by AquaLocator) ==="
foreach ($r in $fb) {
    $n = if ($r.name) { $r.name.Trim() } else { "" }
    if ($n -eq "" -or $n.ToLower() -eq "n/a") {
        Write-Host "  name='$($r.name)' Last='$($r.Last)' First='$($r.First)' dept='$($r.dept)'"
    }
}

Write-Host ""
$renderable = @($fb | Where-Object { $_.name -and $_.name.Trim() -ne "" -and $_.name.Trim().ToLower() -ne "n/a" })
Write-Host "Firebase raw rows : $($fb.Count)"
Write-Host "Firebase renderable: $($renderable.Count)  <-- what AquaLocator shows"
Write-Host "ERP active count  : $($es.Count)"
Write-Host "Difference        : $($es.Count - $renderable.Count)  (ERP - AquaLocator displayed)"

Write-Host ""
Write-Host "=== KNOWN SAME-PERSON PAIRS (ERP name -> Firebase name) ==="
$pairs = @(
    @("Gabriela","Alvarado","Gaby","Alvarado","nickname"),
    @("Elizabeth","Barber","Niki","Barber","different first - verify"),
    @("Edward","Black","Riley","Black","different first - verify"),
    @("Kenta","Cojerian","Kenta","Cojeran","spelling error: Cojerian->Cojeran"),
    @("Harrison","DeBruler","Harry","DeBruler","nickname"),
    @("James","Ebert","Randy","Ebert","different first - verify"),
    @("Carmen","Evans","Jim","Evans","different first - CARMEN MISSING"),
    @("Christapher","Flud","Christopher","Flud","spelling error in ERP"),
    @("Christopher","Guntermann","Chris","Gunterman","nickname + spelling"),
    @("Blake","Hoffmann","Blake","Hoffman","spelling: Hoffmann->Hoffman"),
    @("Christian","Kurshinsky","Chris","Kurshinsky","nickname"),
    @("Robin","Kurshinsky","Shane","Kurshinsky","different first - verify"),
    @("Aidan","Morrison-Stafford","Aidan","Morrison","missing hyphen surname"),
    @("Terence","Reid","Terry","Reid","nickname"),
    @("Aridane","Rodriguez","Ari","Rodriquez","nickname + spelling"),
    @("Daniel","Rodriguez","Daniel","Rodriquez","spelling: Rodriguez->Rodriquez"),
    @("Eduard","Schardl","Edi","Schardl","nickname"),
    @("Zachery","Swanson","Zachary","Swanson","spelling: Zachery->Zachary"),
    @("Ruby","Wilhelm","Michelle","Wilhelm","different first - RUBY MISSING?")
)
foreach ($p in $pairs) {
    Write-Host "  ERP: $($p[1]) $($p[0]) <-> FB: $($p[2]) $($p[3])  [$($p[4])]"
}

Write-Host ""
Write-Host "=== ONLY IN ERP (no FB pair above) ==="
Write-Host "  Aundrea Baker [Customer Service]  -- FB has 'Drea Baker-Ellison' (same person? different dept)"
Write-Host "  Mia Fairley [Field Services]       -- NOT in Firebase at all"
Write-Host "  Yusuke Saito [Applications Eng]   -- FB has 'Taku Sato' (different person?)"
Write-Host "  Takuya Sakomoto [Applications Eng] -- NOT in Firebase at all"
Write-Host "  William Smith [Field Services]     -- NOT in Firebase at all"

Write-Host ""
Write-Host "=== ONLY IN FIREBASE (no ERP pair above) ==="
Write-Host "  Matt Busse [Eng - Mechanical]          -- not in ERP"
Write-Host "  Robin Cartter [Field Services]         -- not in ERP"
Write-Host "  Shinoda [Prod Mgmt - Ozone]            -- incomplete record"
Write-Host "  Xu Ye [Applications Engineering]       -- not in ERP"
