/*
  Argomento 4 · Reti per estensione geografica
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ 4. CLASSIFICAZIONE RETI ============ -->
<section class="slide" data-ch="4" data-chname="Reti per estensione geografica">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 4 · Classificazione delle reti</p>
  <h2>Quanto è grande la rete?</h2>
  <p class="lead">Le reti si classificano in base all'<strong>area geografica</strong> che coprono. Tocca un cerchio o un pulsante.</p>
  <div class="split scale">
   <svg viewBox="0 0 400 400" id="rings" role="img" aria-label="Cerchi concentrici PAN, LAN, MAN, WAN">
    <circle class="ring" data-net="WAN" cx="200" cy="200" r="190"/>
    <circle class="ring" data-net="MAN" cx="200" cy="215" r="140"/>
    <circle class="ring" data-net="LAN" cx="200" cy="235" r="90"/>
    <circle class="ring" data-net="PAN" cx="200" cy="255" r="42"/>
    <text class="ringlbl" data-net="WAN" x="200" y="45" text-anchor="middle">WAN</text>
    <text class="ringlbl" data-net="MAN" x="200" y="110" text-anchor="middle">MAN</text>
    <text class="ringlbl" data-net="LAN" x="200" y="180" text-anchor="middle">LAN</text>
    <text class="ringlbl" data-net="PAN" x="200" y="260" text-anchor="middle">PAN</text>
   </svg>
   <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
    <div class="chips" id="netBtns">
     <button class="chip" data-net="PAN" aria-pressed="false">PAN</button>
     <button class="chip" data-net="LAN" aria-pressed="true">LAN</button>
     <button class="chip" data-net="MAN" aria-pressed="false">MAN</button>
     <button class="chip" data-net="WAN" aria-pressed="false">WAN</button>
    </div>
    <div class="box def" id="netCard"></div>
   </div>
  </div>
 </div>
</section>

<section class="slide" data-ch="4">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 4 · Riepilogo e gioco</p>
  <h2>PAN, LAN, MAN o WAN?</h2>
  <div class="tablewrap"><table>
   <thead><tr><th>Sigla</th><th>Nome completo</th><th>Estensione</th><th>Esempio</th></tr></thead>
   <tbody>
    <tr><td>PAN</td><td>Personal Area Network</td><td>Pochi metri</td><td>Lo smartphone collegato alle cuffie Bluetooth</td></tr>
    <tr><td>LAN</td><td>Local Area Network</td><td>Un edificio</td><td>La rete della scuola o di un ufficio</td></tr>
    <tr><td>MAN</td><td>Metropolitan Area Network</td><td>Una città</td><td>Il Wi-Fi gratuito del Comune nelle piazze del centro</td></tr>
    <tr><td>WAN</td><td>Wide Area Network</td><td>Regioni, Stati, continenti</td><td>La rete che collega tutte le filiali di una banca in Europa</td></tr>
   </tbody></table></div>
  <div class="game" data-game="net"></div>
 </div>
</section>

`);s.remove();})(document.currentScript);
