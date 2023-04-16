<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
    <h1>Sikeres online bejelentkezés!</h1>
    {{-- <h1>Sikeres online fizetés és bejelentkezés!</h1> --}}
    <p>Az időpontja: {{ $appointment }}</p>
    <p><strong>Orvos neve:</strong> {{ $doctorName }}</p>

    @if($medicalExamination === 'gasztroszkopia')

        <h3><strong>Gyomortükrözés előtti teendők:</strong></h3>
        <p>A gyomortükrözés éhgyomorra történik, emiatt a vizsgálat napján, a vizsgálat előtt sem szilárd, sem folyékony étel
nem fogyasztható.</p>
        <p><strong>Ha reggeli órákban </strong>történik a vizsgálat, akkor a vizsgálat előtt éjféltől nem szabad enni, és inni.</p>
        <p><strong>Ha délutáni, esti órákban </strong>történik a vizsgálat, akkor a vizsgálat előtt 8 órával ne étkezzen, és a gyomortükrözés előtt
4 órával már inni sem szabad.</p>
        <p>A dohányzás is kerülendő, mert jelentősen növeli a gyomor savelválasztását.</p>
        <p>A gyomortükrözést követő egy órán belül nem szabad enni, inni, mert a garatérzéstelenítés miatt megnő a
félrenyelés veszélye.</p>

    @elseif($medicalExamination === 'colonoscopia')
        @if($startAt < '16:00')
            <p>A vizsgálat akkor értékelhető, ha tisztára ”mosott” beleket vizsgálunk.</p>
            <p>Ennek feltétele a korrekt hashajtás és a bőséges folyadékbevitel.</p>
            <p><strong>Vizsgálat előtti 5 napon már könnyen emészthető ételeket lehet fogyasztani.</strong></p>
            <p><strong>Nem szabad enni:</strong></p>
            <ul>
                <li>zöldségeket (paradicsom, paprika, uborka...), mert a héja nehezen ürül ki.</li>
                <li>zöld főzeléket (spenót, sóska...), gyümölcsízesítésű teát, mert megfesti a bél falát.</li>
                <li>puffasztó ételeket (karalábé, kelkáposzta, borsó, bab....)</li>
                <li>apró magvas ételeket (mák, szőlő, málna, eper, kivi...), mert az apró magvak nehezen ürülnek</li>
                <li>magos kenyeret, műzlit, gabonapelyheket</li>
                <li>rostos gyümölcsöket (mandarin, narancs) mert a rost nehezen ürül.</li>
            </ul>
            <p><strong>Ne igyon tejet vagy tejtartalmú italokat!</strong></p>
            <p><strong>Ha vastablettát szed, azt a vizsgálat előtt 1 héttel hagyja abba.</strong></p>
            <p>Ügyelni kell a megfelelő folyadék bevitelre, főleg meleg nyári időszakban, ezért ha még kívánja, fogyasszon plusz folyadékot a leírtakhoz képest.</p>
            <p><strong>Az Endogol vény nélkül kapható termék.</strong></p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON REGGEL</strong> könnyű reggelit fogyasszon (pl. pirítós/vajas kenyér)</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON DÉLELŐTT 10 ÓRAKOR</strong> oldjon fel 2 tasak Endogol-t 2 liter vízben és 1-2 óra alatt fogyassza el.</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON 15:00 ÓRAKOR</strong> oldja fel a másik 2 tasak Endogol-t 2 liter vízben és 1-2 óra alatt fogyassza el.</p>
            <p>Ha a fentieken kívül plusz folyadékot kíván, akkor szűrt fehérszőlő- ill. almalé, fekete tea iható.</p>
            <p>A vizsgálat napján folyadékot igyon, a reggeli gyógyszereit vegye be!</p>
            <p><strong>Amennyiben bódítást szeretne kérni, kísérővel érkezzen.</strong></p>
            <p><strong>A vizsgálatra kérjük hozzon maszkot, és egy pár papucsot.</strong></p>
            <p><strong>A megbeszélt időpontban jelentkezzen a vizsgálatra a Kecskemét, Faragó Béla fasor 4. szám alatt.</strong></p>
        @else
            <p>A vizsgálat akkor értékelhető, ha tisztára „mosott” beleket vizsgálunk. Ennek feltétele a korrekt hashajtás és a bőséges folyadékbevitel.</p>
            <p><strong>Vizsgálat előtti 5 napon már könnyen emészthető ételeket lehet fogyasztani.</strong></p>
            <p><strong>Nem szabad enni:</strong></p>
            <ul>
                <li>zöldségeket (paradicsom, paprika, uborka...), mert a héja nehezen ürül ki.</li>
                <li>zöld főzeléket (spenót, sóska...), gyümölcsízesítésű teát, mert megfesti a bél falát.</li>
                <li>puffasztó ételeket (karalábé, kelkáposzta, borsó, bab....)</li>
                <li>apró magvas ételeket (mák, szőlő, málna, eper, kivi...), mert az apró magvak nehezen ürülnek</li>
                <li>magos kenyeret, műzlit, gabonapelyheket</li>
                <li>rostos gyümölcsöket (mandarin, narancs) mert a rost nehezen ürül.</li>
            </ul>
            <p><strong>Ne igyon tejet vagy tejtartalmú italokat!</strong></p>
            <p><strong>Ha vastablettát szed, azt a vizsgálat előtt 1 héttel hagyja abba.</strong></p>
            <p>Ügyelni kell a megfelelő folyadék bevitelre, főleg meleg nyári időszakban, ezért ha még kívánja, fogyasszon plusz folyadékot a leírtakhoz képest.</p>
            <p><strong>Az Endogol vény nélkül kapható termék.</strong></p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON REGGEL</strong> könnyű reggelit fogyasszon (pl. pirítós/vajas kenyér)</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON DÉLBEN</strong> light-os, könnyű levest még ehet.</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON DÉLUTÁN 15 órakor</strong> oldjon fel 2 tasak Endogolt 2 liter vízben és 1-2 óra alatt fogyassza el.</p>
            <p>A <strong>VIZSGÁLAT NAPJÁN REGGEL 08:00 órakor</strong> oldja fel a másik 2 tasak Endogolt 2 liter vízben és 1-2 óra alatt fogyassza el.</p>
            <p>Ha a fentieken kívül plusz folyadékot kíván, akkor szűrt fehérszőlő- ill. almalé, fekete tea iható.</p>
            <p>A vizsgálat napján folyadékot igyon, a reggeli gyógyszereit vegye be!</p>
            <p><strong>Amennyiben bódítást szeretne kérni, kísérővel érkezzen.</strong></p>
            <p><strong>A vizsgálatra kérjük hozzon maszkot, és egy pár papucsot.</strong></p>
        @endif
    @endif
</body>
</html>
