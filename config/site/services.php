<?php

return [
    [
        'section' => true,
        'route' => null,
        'name' => 'Gasztroszkópia',
        'description' => 'Nyelőcső, gyomor, nyombél endoszkópos vizsgálata, melynek során helyi érzéstelenítés mellett tudjuk vizsgálni a fenti szerveket. Leggyakrabban fekély, refluxbetegség, vérszegénység okának kutatása vagy lisztérzékenység gyanúja, Helicobacter fertőzés gyanúja esetén javasolt.',
        'icon' => 'gastroscopy.svg',
        'informations' => [
            [
                'text'  => null,
                'price' => 60000,
            ]
        ]
    ],
    [
        'section' => true,
        'route' => null,
        'name' => 'Colonoscopia',
        'description' => 'A vastag és végbél endoszkópos vizsgálata, melynek során feltérképezhető a bél gyulladása, jó vagy rosszindulatú daganatos elváltozásai, rákelőző állapotok. A vastagbélrák szűrésére a legalkalmasabb módszer, melynek során lehetőség van biopsziára vagy a kisebb elváltozások eltávolítására.',
        'icon' => 'colonoscopy.svg',
        'informations' => [
            [
                'text'  => null,
                'price' => 75000,
            ]
        ]
    ],
    [
        'section' => false,
        'route' => null,
        'name' => 'Biopszia',
        'description' => '',
        'icon' => 'examination.svg',
        'informations' => [
            [
                'text'  => 'Mintavételi hely',
                'price' => 15000,
            ]
        ]
    ],
    [
        'section' => false,
        'route' => null,
        'name' => 'Polypectomia',
        'description' => '',
        'icon' => 'endoscopic.svg',
        'informations' => [
            [
                'text'  => 'polip',
                'price' => 19000,
            ],
            [
                'text'  => 'További polip eltávolítás',
                'price' => 12000,
            ]
        ]
    ],
    [
        'section' => true,
        'route' => null,
        'name' => 'Konzultáció',
        'description' => 'A konzultáció időtartama körülbelül 15 - 30 perc.',
        'icon' => 'consultation.svg',
        'informations' => [
            [
                'text'  => 'Első alkalom',
                'price' => 24000,
            ]
        ]
    ],
    [
        'section' => false,
        'route' => null,
        'name' => 'Kontroll vizsg.',
        'description' => '',
        'icon' => 'control.svg',
        'informations' => [
            [
                'text'  => null,
                'price' => 15000,
            ]
        ]
    ],
    [
        'section' => false,
        'route' => null,
        'name' => 'Szövettani megbeszélés',
        'description' => '',
        'icon' => 'consultation.svg',
        'informations' => [
            [
                'text'  => null,
                'price' => 6000,
            ]
        ]
    ],
    [
        'section' => false,
        'route' => null,
        'name' => 'Bódítás endoszkópos vizsgálathoz',
        'description' => '',
        'icon' => 'anesthetic.svg',
        'informations' => [
            [
                'text'  => null,
                'price' => 15000,
            ]
        ]
    ],
    [
        'section' => true,
        'route' => 'appointments.index',
        'name' => 'On-line konzultáció',
        'description' => 'On- Line konzultáció: Ön az oldalon keresztül tud időpontot foglalni telefonos vagy inernetes konzultációra ( Skype vagy Zoom). Az időpont foglalása és a kártyás fizetést követően az orvos felveszi Önnel a kapcsolatot és megtörténik a megbeszélés.',
        'icon' => 'online.svg',
        'informations' => [
            [
                'text'  => 'Alkalom',
                'price' => 12000,
            ]
        ]
    ],
    [
        'section' => true,
        'route' => 'appointments.index',
        'name' => 'Egészségpszichológiai tanácsadás',
        'description' => '',
        'icon' => 'consultation.svg',
        'informations' => [
            [
                'text'  => null,
                'price' => 15000,
            ]
        ]
    ],
];
