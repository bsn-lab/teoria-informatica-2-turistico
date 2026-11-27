/*
  Argomento 3 · Larghezza di banda
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ 3. BANDA ============ -->
<section class="slide" data-ch="3" data-chname="Larghezza di banda">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 3 · Larghezza di banda</p>
  <h2>Quanti dati passano in un secondo</h2>
  <div class="split">
   <div style="display:flex;flex-direction:column;gap:14px;min-width:0">
    <div class="box def"><h3>Definizione</h3><p>La <span class="kw">larghezza di banda</span> è la quantità massima di dati che un canale può trasmettere nell'unità di tempo. Si misura in <strong>bit al secondo (bps)</strong>.</p></div>
    <div class="tablewrap"><table style="min-width:0">
     <thead><tr><th>Unità</th><th>Valore</th></tr></thead>
     <tbody>
      <tr><td>Kbps</td><td>mille bit al secondo</td></tr>
      <tr><td>Mbps</td><td>un milione di bit al secondo</td></tr>
      <tr><td>Gbps</td><td>un miliardo di bit al secondo</td></tr>
     </tbody></table></div>
   </div>
   <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
    <div class="road" aria-hidden="true">
     <div class="rl"><span class="car"></span></div><div class="rl"><span class="car"></span></div><div class="rl"><span class="car"></span></div><div class="rl"><span class="car"></span></div>
     <span class="roadcap">PIÙ CORSIE = PIÙ AUTO AL SECONDO</span>
    </div>
    <p>Pensa a un'<strong>autostrada</strong>: le auto sono i dati, le corsie sono la banda. Più corsie ci sono, più auto passano ogni secondo.</p>
    <div class="box"><h3>Attenzione: bit e byte</h3><p><strong>1 byte = 8 bit.</strong> La velocità della connessione si scrive in <b>Mb</b>ps (megabit), la dimensione dei file in <b>MB</b> (megabyte). Per confrontarle bisogna moltiplicare i MB per 8.</p></div>
   </div>
  </div>
 </div>
</section>

<section class="slide" data-ch="3">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 3 · Laboratorio</p>
  <h2>Quanto ci metto a scaricarlo?</h2>
  <div class="box"><h3>La formula</h3><div class="math" role="math" aria-label="tempo in secondi uguale dimensione del file in MB per 8, diviso velocità in Mbps"><span class="mvar">tempo <small>(s)</small></span><span class="meq">=</span><span class="frac"><span class="num">dimensione file <small>(MB)</small> × 8</span><span class="den">velocità <small>(Mbps)</small></span></span></div><p class="ex">Si moltiplica per 8 perché il file si misura in <b>byte</b> e la velocità in <b>bit</b>.</p></div>
  <div class="calc">
   <label>Che file scarichi?</label>
   <div class="chips" id="fileChips">
    <button class="chip" data-mb="4" aria-pressed="false">Foto dallo smartphone · 4 MB</button>
    <button class="chip" data-mb="25" aria-pressed="true">Brochure PDF · 25 MB</button>
    <button class="chip" data-mb="500" aria-pressed="false">Video di 10 minuti · 500 MB</button>
    <button class="chip" data-mb="4000" aria-pressed="false">Film HD · 4 GB</button>
   </div>
   <label>Con quale connessione?</label>
   <div class="chips" id="netChips">
    <button class="chip" data-mbps="7" aria-pressed="true">ADSL (doppino) · 7 Mbps</button>
    <button class="chip" data-mbps="40" aria-pressed="false">4G · 40 Mbps</button>
    <button class="chip" data-mbps="100" aria-pressed="false">Fibra misto rame FTTC · 100 Mbps</button>
    <button class="chip" data-mbps="1000" aria-pressed="false">Fibra FTTH · 1 Gbps</button>
   </div>
   <div class="result"><span class="big" id="dlTime">—</span><span class="formula" id="dlFormula"></span></div>
   <div class="dlbar"><div id="dlBar"></div></div>
   <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><button class="primary" id="dlGo">Simula il download</button><span class="hint" id="dlNote"></span></div>
  </div>
  <p class="ex">I tempi sono teorici: nella realtà la velocità effettiva è un po' più bassa di quella dichiarata.</p>
 </div>
</section>

`);s.remove();})(document.currentScript);
