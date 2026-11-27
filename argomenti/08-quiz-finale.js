/*
  Quiz finale
  Slide di questa parte (ogni <section class="slide"> è una slide).
  Il file viene caricato da index.html (non si apre da solo).
  Il testo tra i due accenti gravi è normale HTML e si modifica come in una pagina web.
*/
(function(s){s.insertAdjacentHTML("beforebegin",`<!-- ============ QUIZ FINALE ============ -->
<section class="slide" data-ch="8" data-chname="Quiz finale">
 <div class="slide-inner">
  <p class="eyebrow">Ripasso</p>
  <h2>Quiz finale</h2>
  <div class="quiz" id="quiz"></div>
 </div>
</section>

`);s.remove();})(document.currentScript);
