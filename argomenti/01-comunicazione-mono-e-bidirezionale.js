/*
  Argomento 1 · Comunicazione mono e bidirezionale
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ 1. COMUNICAZIONE ============ -->
<section class="slide" data-ch="1" data-chname="Comunicazione mono e bidirezionale">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 1 · Comunicazione</p>
  <h2>Ogni comunicazione ha quattro elementi</h2>
  <div class="quad">
   <div class="box"><h3><small>Chi invia</small>Emittente</h3><p class="ex">Un amico che ti scrive</p></div>
   <div class="box"><h3><small>Cosa</small>Messaggio</h3><p class="ex">«Ci vediamo alle 18?»</p></div>
   <div class="box"><h3><small>Attraverso</small>Canale</h3><p class="ex">Chat, telefono, radio…</p></div>
   <div class="box"><h3><small>Chi riceve</small>Ricevente</h3><p class="ex">Tu che leggi il messaggio</p></div>
  </div>
  <div class="split">
   <div class="box def"><h3>Comunicazione monodirezionale</h3><p>Il messaggio va <span class="kw">in una sola direzione</span>: dall'emittente al ricevente. Il ricevente non può rispondere sullo stesso canale.</p><p class="ex"><b>Esempi:</b> radio, televisione, cartellone pubblicitario, annuncio dall'altoparlante.</p></div>
   <div class="box def"><h3>Comunicazione bidirezionale</h3><p>Il messaggio va <span class="kw">in entrambe le direzioni</span>: emittente e ricevente si scambiano i ruoli.</p><p class="ex"><b>Esempi:</b> telefonata, videochiamata, chat, walkie-talkie.</p></div>
  </div>
  <details class="ask"><summary>Un cartello stradale che tipo di comunicazione è?</summary><p>Monodirezionale: il cartello dà un'informazione all'automobilista, ma l'automobilista non può rispondere.</p></details>
 </div>
</section>

<section class="slide" data-ch="1">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 1 · Comunicazione</p>
  <h2>Simplex, half-duplex, full-duplex</h2>
  <p class="lead">La bidirezionale può essere <strong>alternata</strong> (si parla uno alla volta) o <strong>contemporanea</strong> (si parla insieme).</p>
  <div class="duplex dx-simplex" id="duplex">
   <div class="chips" role="group" aria-label="Modalità">
    <button class="chip" data-mode="simplex" aria-pressed="true">Simplex</button>
    <button class="chip" data-mode="half" aria-pressed="false">Half-duplex</button>
    <button class="chip" data-mode="full" aria-pressed="false">Full-duplex</button>
   </div>
   <div class="dx-stage">
    <div class="dev" id="devA">RADIO</div>
    <div class="lanes">
     <div class="lane r"><i></i><i></i><i></i></div>
     <div class="lane l"><i></i><i></i><i></i></div>
    </div>
    <div class="dev" id="devB">ASCOL&shy;TATORE</div>
   </div>
   <p class="dx-text" id="dxText"></p>
  </div>
 </div>
</section>

<section class="slide" data-ch="1">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 1 · Gioco</p>
  <h2>Mono o bidirezionale?</h2>
  <div class="game" data-game="com"></div>
 </div>
</section>

`);s.remove();})(document.currentScript);
