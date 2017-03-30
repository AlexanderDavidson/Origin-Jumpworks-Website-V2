var $shipPulse = document.getElementById('ship-par')

$shipPulse.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.classList.add('animated', 'pulse')

    setTimeout(function() {
      event.target.classList.remove('animated', 'pulse')
    }, 1000);
  }, false);
