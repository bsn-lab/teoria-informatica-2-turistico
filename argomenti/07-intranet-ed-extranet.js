/*
  Argomento 7 · Intranet ed Extranet
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ 7. INTRANET / EXTRANET ============ -->
<section class="slide" data-ch="7" data-chname="Intranet ed Extranet">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 7 · Intranet ed Extranet</p>
  <h2>Chi può entrare?</h2>
  <div class="split">
   <div class="nest"><svg viewBox="0 0 460 330" aria-label="Intranet dentro Extranet dentro Internet">
     <rect x="5" y="5" width="450" height="320" rx="22" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>
     <text x="25" y="36" class="mtxt" style="font-size:15px">INTERNET · tutti</text>
     <rect x="55" y="55" width="350" height="250" rx="18" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"/>
     <text x="75" y="85" class="mtxt" style="font-size:15px;fill:var(--teal)">EXTRANET · partner con login</text>
     <rect x="110" y="110" width="240" height="170" rx="14" fill="var(--amber-soft)" stroke="var(--amber)" stroke-width="2"/>
     <text x="130" y="140" class="mtxt" style="font-size:15px;fill:var(--amber)">INTRANET · solo dipendenti</text>
     <text x="230" y="200" text-anchor="middle" style="font-family:var(--f-display);font-weight:800;font-size:22px;fill:var(--ink)">Azienda</text>
     <text x="230" y="228" text-anchor="middle" class="mtxt">circolari, turni, gestionale</text>
   </svg></div>
   <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
    <div class="box def"><h3>Intranet</h3><p>Rete <span class="kw">privata e interna</span> di un'azienda che usa le stesse tecnologie di Internet (siti, browser, email). Vi accedono <strong>solo i dipendenti</strong>.</p><p class="ex"><b>Esempio:</b> il portale aziendale con circolari, turni del personale e moduli per le ferie.</p></div>
    <div class="box def"><h3>Extranet</h3><p>Parte della rete aziendale <span class="kw">aperta a soggetti esterni autorizzati</span>: fornitori, clienti, partner. Si entra con <strong>nome utente e password</strong>.</p><p class="ex"><b>Esempio:</b> il portale dove i fornitori controllano gli ordini dell'azienda e caricano le fatture.</p></div>
   </div>
  </div>
 </div>
</section>

<section class="slide" data-ch="7">
 <div class="slide-inner">
  <p class="eyebrow">Argomento 7 · Differenze e gioco</p>
  <h2>Intranet, Extranet o Internet?</h2>
  <div class="tablewrap"><table>
   <thead><tr><th></th><th>Intranet</th><th>Extranet</th><th>Internet</th></tr></thead>
   <tbody>
    <tr><td>Chi accede</td><td>Solo i dipendenti</td><td>Dipendenti + esterni autorizzati</td><td>Chiunque</td></tr>
    <tr><td>Accesso</td><td>Dalla rete aziendale, con credenziali</td><td>Da Internet, con credenziali</td><td>Libero</td></tr>
    <tr><td>Scopo</td><td>Organizzazione interna</td><td>Collaborare con partner e fornitori</td><td>Informazione e servizi pubblici</td></tr>
   </tbody></table></div>
  <div class="game" data-game="ext"></div>
 </div>
</section>

`);s.remove();})(document.currentScript);
