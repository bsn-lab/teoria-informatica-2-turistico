/*
  Argomento 5 · Internet: definizione, storia, funzionamento
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ 5. INTERNET ============ -->
<section class="slide" data-ch="5" data-chname="Internet: definizione, storia, funzionamento">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 5 · Internet</p>
  <h2>Internet è una rete di reti</h2>
  <div class="split">
   <div class="box def"><h3>Definizione</h3><p><span class="kw">Internet</span> è l'insieme di milioni di reti collegate tra loro in tutto il mondo, che comunicano usando le stesse regole: il protocollo <strong>TCP/IP</strong>.</p><p class="ex">È la WAN più grande che esista: nessuno la possiede tutta, ogni rete collegata ne è un pezzo.</p></div>
   <div class="box"><h3>Internet non è il Web</h3><p>Il <strong>World Wide Web</strong> (i siti che apri con il browser) è solo uno dei <strong>servizi</strong> che funzionano su Internet.</p><ul class="clean ex"><li>Web: siti, motori di ricerca, negozi online</li><li>Posta elettronica</li><li>Messaggistica e videochiamate</li><li>Streaming, cloud, giochi online</li></ul></div>
  </div>
  <details class="ask"><summary>Quando usi WhatsApp stai usando il Web?</summary><p>No: stai usando Internet, ma non il Web. WhatsApp è un servizio diverso che non passa dal browser.</p></details>
 </div>
</section>

<section class="slide" data-ch="5">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 5 · Come funziona</p>
  <h2>Il viaggio di un messaggio</h2>
  <p class="lead">Cosa succede quando scrivi nel browser l'indirizzo di un sito, per esempio <strong>www.esempio.it</strong>, e premi Invio?</p>
  <div class="split">
   <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
    <div class="box"><h3>Prima di partire</h3><p>Ogni dispositivo collegato ha un <span class="kw">indirizzo IP</span>, come un indirizzo postale.</p></div>
    <ol class="steps">
     <li><b>Trova l'indirizzo</b>Il <strong>DNS</strong> traduce il nome del sito (facile da ricordare) nel suo indirizzo IP.</li>
     <li><b>Dividi il messaggio</b>I dati vengono divisi in tanti piccoli <span class="kw">pacchetti</span>.</li>
     <li><b>Fai viaggiare i pacchetti</b>I <strong>router</strong> smistano i pacchetti: ognuno può fare una strada diversa.</li>
     <li><b>Ricomponi il messaggio</b>All'arrivo il <strong>server</strong> del sito rimette i pacchetti in ordine e ricompone il messaggio.</li>
    </ol>
   </div>
   <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
    <div class="net"><div class="net-in"><svg viewBox="0 0 800 300" id="netSvg" aria-label="Rete con router tra PC e server"></svg></div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="primary" id="sendBtn">Invia il messaggio</button><button class="ghost" id="resetNet">Ricomincia</button></div>
    <div class="netlog" id="netLog" aria-live="polite">Premi «Invia il messaggio».</div>
   </div>
  </div>
 </div>
</section>

`);s.remove();})(document.currentScript);
