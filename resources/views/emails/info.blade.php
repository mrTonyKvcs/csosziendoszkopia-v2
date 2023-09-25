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
            <p>Gyógyszertárban, vény nélkül tudja megvásárolni a hashajtót, melynek neve: ENDOGOL.</p>
            <p><strong>Vizsgálat előtti 5 napon már könnyen emészthető, rostmentes ételeket lehet fogyasztani.</strong></p>
            <p><strong>Ne fogyasszon:</strong></p>
            <ul>
                <li>zöldségeket (paradicsom, paprika, uborka...), mert a héja nehezen ürül ki.</li>
                <li>zöld főzeléket (spenót, sóska...), gyümölcsízesítésű teát, mert megfesti a bél falát.</li>
                <li>puffasztó ételeket (karalábé, kelkáposzta, borsó, bab....)</li>
                <li>apró magvas ételeket (mák, szőlő, málna, eper, kivi...), mert az apró magvak nehezen ürülnek</li>
                <li>magos kenyeret, műzlit, gabonapelyheket</li>
                <li>rostos gyümölcsöket (mandarin, narancs) mert a rost nehezen ürül.</li>
            </ul>
            <br>
            <p><strong>Ne fogyasszon:</strong></p>
            <ul>
                <li>Hús, krumpli, tészta, szendvics, natúr joghurt, kefír, tojás.</li>
            </ul>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON REGGEL</strong> könnyű reggelit fogyasszon (pl. pirítós/vajas kenyér)</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON DÉLELŐTT 10 ÓRAKOR</strong> oldjon fel 2 tasak Endogolt 2 liter vízben és bő 2 óra alatt fogyassza el. Ha nagyon édes, citromlevet tud beletenni.</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON 15:00 ÓRAKOR</strong> ismételten oldjon fel 2 tasak Endogolt 2 liter vízben és bő 2 óra alatt fogyassza el.  </p>
            <p>A vizsgálatig még igyon folyadékot: víz, tea, szűrt üdítő, cukrot szopogathat!</p>
            <p>A vizsgálat napján reggel állandó gyógyszereit (pl. vérnyomáscsökkentő, szívgyógyszer, pszichiatriai gyógyszer) vegye be!</p>
            <p>Amennyiben cukorbeteg, cukorgyógyszerét ne vegye be és az inzulint se adja be magának!!!</p>
            <p>Ha vastablettát szed, vizsgálat előtt 1 héttel hagyja abba!</p>
            <p>Amennyiben bódítást szeretne kérni, kísérővel érkezzen, papucsot hozzon magával.</p>
            <p><strong>A megbeszélt időpontban jelentkezzen a vizsgálatra a Kecskemét, Faragó Béla fasor 4. szám alatt, beengedni a Csőszi Endoszkópos csengő megnyomásával tudjuk.</strong></p>
        @else
            <p>A vizsgálat akkor értékelhető, ha tisztára „mosott” beleket vizsgálunk.  Ennek feltétele a korrekt hashajtás és a bőséges folyadékbevitel.  </p>
            <p>Gyógyszertárban, vény nélkül tudja megvásárolni a hashajtót, melynek neve: ENDOGOL.</p>
            <p><strong>Vizsgálat előtti 5 napon már könnyen emészthető, rostmentes ételeket lehet fogyasztani.</strong></p>
            <p><strong>Ne fogyasszon:</strong></p>
            <ul>
                <li>zöldségeket (paradicsom, paprika, uborka...), mert a héja nehezen ürül ki.</li>
                <li>zöld főzeléket (spenót, sóska...), gyümölcsízesítésű teát, mert megfesti a bél falát.</li>
                <li>puffasztó ételeket (karalábé, kelkáposzta, borsó, bab....)</li>
                <li>apró magvas ételeket (mák, szőlő, málna, eper, kivi...), mert az apró magvak nehezen ürülnek</li>
                <li>magos kenyeret, műzlit, gabonapelyheket</li>
                <li>rostos gyümölcsöket (mandarin, narancs) mert a rost nehezen ürül.</li>
            </ul>
            <p><strong>Ehető:</strong></p>
            <ul>
                <li>Hús, krumpli, tészta, szendvics, natúr joghurt, kefír, tojás.</li>
            </ul>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON REGGEL</strong> könnyű reggelit fogyasszon (pl. pirítós/vajas kenyér)</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON DÉLBEN</strong> már csak leves levét eheti, innentől kezdve enni már nem lehet.</p>
            <p>A <strong>VIZSGÁLAT ELŐTTI NAPON DÉLUTÁN 15 órakor</strong> oldjon fel 2 tasak Endogolt  2 liter vízben és bő 2 óra alatt fogyassza el. Ha nagyon édes, citromlevet tud beletenni.</p>
            <p>A <strong>VIZSGÁLAT NAPJÁN REGGEL 07:00 órakor</strong> állandó gyógyszereit (pl. vérnyomáscsökkentő, szívgyógyszer, pszichiatriai gyógyszer) vegye be!  Ismételten készítse el a hashajtót az előző naphoz hasonlóan: oldjon fel  2 tasak Endogolt  2 liter vízben és bő 2 óra alatt fogyassza el.  </p>
            <p>A vizsgálatig még igyon folyadékot: víz, tea, szűrt üdítő, cukrot szopogathat!</p>
            <br>
            <p>Amennyiben cukorbeteg, cukorgyógyszerét ne vegye be és az inzulint se adja be magának!!!</p>
            <p>Ha vastablettát szed, előtte 1 héttel hagyja abba!</p>
            <p>Amennyiben bódítást szeretne kérni, kísérővel érkezzen, papucsot hozzon magával.</p>
            <p><strong>A megbeszélt időpontban jelentkezzen a vizsgálatra a Kecskemét, Faragó Béla fasor 4. szám alatt, beengedni a Csőszi Endoszkópos csengő megnyomásával tudjuk.</strong></p>
        @endif
    @endif
</body>
</html>
