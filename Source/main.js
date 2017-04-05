$('.ui.accordion')
  .accordion()
;

$('.ui.dropdown')
  .dropdown()
;

$('.ui.modal')
  .modal()
;

$('.ui.embed').embed();

$(document).ready(function(){
     $('#modal-350r-button').click(function(){
        $('#modal-350r').modal('show');
     });
});

var $shipPulse = document.getElementById('ship-par-85x')

$shipPulse.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.classList.add('animated', 'pulse')

    setTimeout(function() {
      event.target.classList.remove('animated', 'pulse')
    }, 1000);
  }, false);

var $shipPulse = document.getElementById('ship-par-m50')

$shipPulse.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.classList.add('animated', 'pulse')

    setTimeout(function() {
      event.target.classList.remove('animated', 'pulse')
    }, 1000);
  }, false);
