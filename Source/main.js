$('.ui.accordion')
  .accordion()
;

$('.ui.dropdown')
  .dropdown()
;

var $shipPulse = document.getElementById('ship-par-85x')

$shipPulse.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.classList.add('animated', 'pulse')

    setTimeout(function() {
      event.target.classList.remove('animated', 'pulse')
    }, 1000);
  }, false);
