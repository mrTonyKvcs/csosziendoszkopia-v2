import {
    CalendarDaysIcon,
    UserGroupIcon,
    FaceSmileIcon,
} from "@heroicons/react/24/outline";

export const MEDICAL_EXAMINATIONS = [
    {
        icon: "icons/gastroscopy.svg",
        name: "Gasztroszkópia",
        text: "Nyelőcső, gyomor, nyombél endoszkópos vizsgálata, melynek során helyi érzéstelenítés mellett tudjuk vizsgálni a fenti szerveket. Leggyakrabban fekély, refluxbetegség, vérszegénység okának kutatása vagy lisztérzékenység gyanúja, Helicobacter fertőzés gyanúja esetén javasolt.",
    },
    {
        icon: "icons/colonoscopy.svg",
        name: "Colonoscopia",
        text: "A vastag és végbél endoszkópos vizsgálata, melynek során feltérképezhető a bél gyulladása, jó vagy rosszindulatú daganatos elváltozásai, rákelőző állapotok. A vastagbélrák szűrésére a legalkalmasabb módszer, melynek során lehetőség van biopsziára vagy a kisebb elváltozások eltávolítására.",
    },
    {
        icon: "icons/consultation.svg",
        name: "Konzultáció",
        text: "A konzultáció időtartama körülbelül 15 - 30 perc.",
    },
    {
        icon: "icons/online.svg",
        name: "On-Line Konzultáció",
        text: "On- Line konzultáció: Ön az oldalon keresztül tud időpontot foglalni telefonos vagy inernetes konzultációra ( Skype vagy Zoom). Az időpont foglalása és a kártyás fizetést követően az orvos felveszi Önnel a kapcsolatot és megtörténik a megbeszélés.",
    },
];

export const COUNTER_LIST = [
    {
        icon: <CalendarDaysIcon className="w-9 h-9 text-white" />,
        name: "Praktizálás éve",
        maxValue: 1990,
    },
    {
        icon: <UserGroupIcon className="w-9 h-9  text-white" />,
        name: "Vizsgálatok",
        maxValue: 7789,
    },
    {
        icon: <FaceSmileIcon className="w-9 h-9  text-white" />,
        name: "Elégedett páciens",
        maxValue: 7789,
    },
];
