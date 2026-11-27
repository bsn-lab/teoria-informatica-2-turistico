/*
  Argomento 6 · Scheda di rete e modem
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ 6. SCHEDA DI RETE E MODEM ============ -->
<section class="slide" data-ch="6" data-chname="Scheda di rete e modem">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 6 · Scheda di rete</p>
  <h2>La scheda di rete collega il computer alla rete</h2>
  <div class="split">
   <div class="box def"><h3>Definizione</h3><p>La <span class="kw">scheda di rete</span> (NIC, <em>Network Interface Card</em>) è il componente hardware che permette a un dispositivo di collegarsi a una rete e di inviare e ricevere dati.</p>
    <ul class="clean ex"><li><b>Cablata</b>: ha la porta Ethernet (connettore RJ45)</li><li><b>Wireless</b>: ha un'antenna per il Wi-Fi</li><li>Oggi è quasi sempre <b>integrata</b> nella scheda madre di PC, smartphone, smart TV</li></ul>
   </div>
   <div class="box"><h3>L'indirizzo MAC</h3><p>Ogni scheda di rete ha un codice univoco scritto dal produttore: l'<strong>indirizzo MAC</strong>. È come il numero di telaio di un'auto: identifica quella scheda e nessun'altra.</p>
    <div><span class="mac" id="macOut"><span>3C:52:82</span>:<span class="v">1A:9F:07</span></span></div>
    <p class="ex">48 bit scritti in esadecimale: la prima metà indica il <b>produttore</b>, la seconda il <b>singolo esemplare</b>.</p>
    <div><button class="ghost" id="macBtn">Genera un altro MAC</button></div>
   </div>
  </div>
 </div>
</section>

<section class="slide" data-ch="6">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 6 · Modem</p>
  <h2>Il modem traduce i segnali</h2>
  <div class="box def"><h3>Definizione</h3><p><span class="kw">MO</span>dulatore-<span class="kw">DEM</span>odulatore. Il computer lavora con segnali <strong>digitali</strong> (0 e 1), ma la linea telefonica trasporta segnali <strong>analogici</strong> (onde). Il modem trasforma il digitale in analogico per inviare (<b>modulazione</b>) e l'analogico in digitale per ricevere (<b>demodulazione</b>).</p></div>
  <div class="chips" id="modemChips">
   <button class="chip" data-dir="mod" aria-pressed="true">Invio: modulazione</button>
   <button class="chip" data-dir="demod" aria-pressed="false">Ricezione: demodulazione</button>
  </div>
  <div class="modem"><div class="modem-in"><svg viewBox="0 0 760 190" id="modemSvg" aria-label="Segnale digitale convertito in analogico"></svg></div></div>
  <p class="ex">Il «modem» che abbiamo a casa di solito è un <b>modem-router</b>: un unico apparecchio che fa da modem, da router, da switch (le porte per collegare più dispositivi con il cavo) e da access point Wi-Fi.</p>
 </div>
</section>

`);s.remove();})(document.currentScript);
