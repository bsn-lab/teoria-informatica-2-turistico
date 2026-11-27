/*
  Argomento 2 · Mezzi di trasmissione
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ 2. MEZZI ============ -->
<section class="slide" data-ch="2" data-chname="Mezzi di trasmissione">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 2 · Mezzi di trasmissione</p>
  <h2>Il canale fisico che trasporta i dati</h2>
  <p class="lead">I mezzi si dividono in <strong>cablati</strong> (il segnale viaggia dentro un cavo) e <strong>wireless</strong> (il segnale viaggia nell'aria come onda radio).</p>
  <div class="tabs" role="tablist" id="mediaTabs">
   <button class="chip" role="tab" aria-pressed="true" data-tab="dop">Doppino</button>
   <button class="chip" role="tab" aria-pressed="false" data-tab="fib">Fibra ottica</button>
   <button class="chip" role="tab" aria-pressed="false" data-tab="wir">Wireless</button>
  </div>

  <div class="tabpanel" data-panel="dop">
   <div class="split">
    <div class="illu"><svg viewBox="0 0 420 160" aria-label="Due fili di rame intrecciati">
      <rect x="10" y="50" width="400" height="60" rx="30" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>
      <path id="tw1" d="" fill="none" stroke="var(--amber)" stroke-width="7" stroke-linecap="round"/>
      <path id="tw2" d="" fill="none" stroke="var(--teal)" stroke-width="7" stroke-linecap="round"/>
      <text x="210" y="140" text-anchor="middle" class="mtxt">due fili di rame intrecciati</text>
    </svg></div>
    <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
     <h3>Doppino telefonico (rame)</h3>
     <p>Due fili di rame <span class="kw">intrecciati</span> tra loro: l'intreccio riduce i disturbi. Il segnale è <strong>elettrico</strong>. È il cavo della vecchia linea di casa e il cavo di rete Ethernet (che ha 4 coppie).</p>
     <div class="proscons"><div class="pro"><b>Vantaggi</b>Economico, già presente in quasi tutti gli edifici, facile da installare</div><div class="con"><b>Svantaggi</b>Velocità limitata, il segnale si indebolisce con la distanza, sensibile ai disturbi</div></div>
    </div>
   </div>
  </div>

  <div class="tabpanel" data-panel="fib" hidden>
   <div class="split">
    <div class="illu"><svg viewBox="0 0 420 160" aria-label="Raggio di luce che rimbalza nella fibra">
      <rect x="10" y="40" width="400" height="80" rx="40" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"/>
      <rect x="10" y="60" width="400" height="40" rx="20" fill="var(--surface)" stroke="var(--line)" stroke-width="1"/>
      <polyline class="ray" points="20,80 60,62 110,98 160,62 210,98 260,62 310,98 360,62 400,80" fill="none" stroke="var(--amber)" stroke-width="4" stroke-linejoin="round"/>
      <text x="210" y="145" text-anchor="middle" class="mtxt">la luce rimbalza dentro il nucleo di vetro</text>
    </svg></div>
    <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
     <h3>Fibra ottica</h3>
     <p>Un filo sottilissimo di <span class="kw">vetro o plastica</span> in cui i dati viaggiano come <strong>impulsi di luce</strong>: luce accesa = 1, spenta = 0. La luce rimbalza sulle pareti (riflessione totale) e arriva lontano.</p>
     <div class="proscons"><div class="pro"><b>Vantaggi</b>Velocità altissima, grandi distanze, immune ai disturbi elettromagnetici e atmosferici</div><div class="con"><b>Svantaggi</b>Più costosa, delicata da piegare, installazione specializzata</div></div>
    </div>
   </div>
  </div>

  <div class="tabpanel" data-panel="wir" hidden>
   <div class="split">
    <div class="illu"><svg viewBox="0 0 420 160" aria-label="Antenna che trasmette onde">
      <g transform="translate(0,-20)">
       <rect x="50" y="95" width="20" height="50" rx="3" fill="var(--ink)"/>
       <circle cx="60" cy="100" r="7" fill="var(--amber)"/>
       <path class="wave-arc" d="M90 70 A45 45 0 0 1 90 130" fill="none" stroke="var(--amber)" stroke-width="4"/>
       <path class="wave-arc" d="M120 50 A75 75 0 0 1 120 150" fill="none" stroke="var(--amber)" stroke-width="4"/>
       <path class="wave-arc" d="M150 35 A100 100 0 0 1 150 165" fill="none" stroke="var(--amber)" stroke-width="4"/>
       <rect x="320" y="80" width="56" height="90" rx="10" fill="var(--surface)" stroke="var(--ink)" stroke-width="3"/>
       <rect x="328" y="92" width="40" height="62" rx="3" fill="var(--teal-soft)"/>
      </g>
      <text x="210" y="155" text-anchor="middle" class="mtxt">onde radio attraverso l'aria</text>
    </svg></div>
    <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
     <h3>Wireless (senza fili)</h3>
     <p>I dati viaggiano nell'aria come <span class="kw">onde elettromagnetiche</span> (onde radio). Esempi: <strong>Wi-Fi</strong> di casa o di scuola, <strong>Bluetooth</strong>, rete cellulare <strong>4G/5G</strong>, satellite.</p>
     <div class="proscons"><div class="pro"><b>Vantaggi</b>Nessun cavo, mobilità, ci si collega ovunque ci sia copertura</div><div class="con"><b>Svantaggi</b>Muri e ostacoli indeboliscono il segnale, più esposto a intercettazioni, banda condivisa tra gli utenti</div></div>
    </div>
   </div>
  </div>
 </div>
</section>

<section class="slide" data-ch="2">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 2 · Confronto</p>
  <h2>Doppino, fibra, wireless a confronto</h2>
  <div class="tablewrap"><table>
   <thead><tr><th>Mezzo</th><th>Segnale</th><th>Velocità</th><th>Distanza</th><th>Resistenza ai disturbi</th><th>Uso tipico</th></tr></thead>
   <tbody>
    <tr><td>Doppino</td><td>Elettrico</td><td><span class="meter" aria-label="2 su 5"><span class="on"></span><span class="on"></span><span></span><span></span><span></span></span></td><td>Breve</td><td><span class="meter" aria-label="2 su 5"><span class="on"></span><span class="on"></span><span></span><span></span><span></span></span></td><td>Linea ADSL, cavo di rete in ufficio</td></tr>
    <tr><td>Fibra ottica</td><td>Luce</td><td><span class="meter" aria-label="5 su 5"><span class="on"></span><span class="on"></span><span class="on"></span><span class="on"></span><span class="on"></span></span></td><td>Molto lunga (anche cavi sottomarini)</td><td><span class="meter" aria-label="5 su 5"><span class="on"></span><span class="on"></span><span class="on"></span><span class="on"></span><span class="on"></span></span></td><td>Dorsali di Internet, FTTH a casa</td></tr>
    <tr><td>Wireless</td><td>Onde radio</td><td><span class="meter" aria-label="3 su 5"><span class="on"></span><span class="on"></span><span class="on"></span><span></span><span></span></span></td><td>Da pochi metri (Wi-Fi) a km (cellulare)</td><td><span class="meter" aria-label="2 su 5"><span class="on"></span><span class="on"></span><span></span><span></span><span></span></span></td><td>Wi-Fi, smartphone, Bluetooth</td></tr>
   </tbody>
  </table></div>
  <details class="ask"><summary>Una scuola vuole Internet veloce in 30 aule. Cosa lo porta fino all'edificio e cosa si usa nelle aule?</summary><p>Fino all'edificio conviene la fibra ottica (veloce, lunghe distanze). Nelle aule si usa il Wi-Fi, così studenti e docenti si collegano con tablet e PC senza cavi.</p></details>
 </div>
</section>

`);s.remove();})(document.currentScript);
