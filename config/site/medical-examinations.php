<?php


return [
    'gasztroszkopia' => [
        'icon' => "icons/gastroscopy.svg",
        'text' => 'Nyelőcső, gyomor, nyombél endoszkópos vizsgálata, melynek során helyi érzéstelenítés mellett tudjuk vizsgálni a fenti szerveket. Leggyakrabban fekély, refluxbetegség, vérszegénység okának kutatása vagy lisztérzékenység gyanúja, Helicobacter fertőzés gyanúja esetén javasolt.',
        'extra' => [
            'Gyomortükrözés (gasztroszkópia)' => '60 000Ft',
            'Bódítás' => '15 000Ft',
            'Szövettani mintavétel' => '15 000Ft/minta',
        ],
        'name' => "Gasztroszkópia",
        'price' => 60000,
        // 'Endoszkópos polypeltávolítás 1 polyp' => '17 000Ft',
        // 'Endoszkópos polypeltávolítás 2 polyp' => '29 000Ft/összesen',
        // 'Endoszkópos polypeltávolítás 3 polyp' => '41 000Ft/összesen'
    ],
    'colonoscopia' => [
        'icon' => "icons/colonoscopy.svg",
        'name' => "Colonoscopia",
        'text' => 'A vastag és végbél endoszkópos vizsgálata, melynek során feltérképezhető a bél gyulladása, jó vagy rosszindulatú daganatos elváltozásai, rákelőző állapotok. A vastagbélrák szűrésére a legalkalmasabb módszer, melynek során lehetőség van biopsziára vagy a kisebb elváltozások eltávolítására.',
        'price' => 75000,
        'extra' => [
            'Vastagbéltükrözés (kolonoszkópia)' => '75 000Ft',
            'Bódítás' => '15 000Ft',
            'Szövettani mintavétel' => '15 000Ft/minta',
            'Endoszkópos polypeltávolítás 1 polyp' => '19 000Ft',
            'Endoszkópos polypeltávolítás 2 polyp' => '31 000Ft (összesen)',
            'Endoszkópos polypeltávolítás 3 polyp' => '43 000Ft (összesen)'
        ]
    ],
    'konzultacio' => [
        'icon' => "icons/consultation.svg",
        'name' => "Konzultáció",
        'text' => 'A konzultáció időtartama körülbelül 15 - 30 perc',
        'price' => 24000,
        'extra' => [
            'Konzultáció' => '24 000Ft',
            'Kontroll konzultáció (3 hónapon belül)' => '15 000Ft',
            'Szövettani megbeszélés' => '6 000Ft'
        ]
    ],
    'on-line-konzultacio' => [

        'icon' => "icons/online.svg",
        'name' => "On-Line Konzultáció",
        'text' => "On- Line konzultáció: Ön az oldalon keresztül tud időpontot foglalni telefonos vagy inernetes konzultációra ( Skype vagy Zoom). Az időpont foglalása és a kártyás fizetést követően az orvos felveszi Önnel a kapcsolatot és megtörténik a megbeszélés.",
    ],
	'egeszsegpszichologiai-tanacsadas' => [
        'icon' => "icons/consultation.svg",
        'name' => "Egészségpszichológiai tanácsadás",
        'text' => 'A konzultáció időtartama körülbelül 50 perc',
        'price' => 15000,
        'extra' => [
            'Egészségpszichológiai tanácsadás' => '15000 Ft',
        ]
    ],
];
