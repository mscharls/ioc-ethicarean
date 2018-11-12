
  // START OF SMOOTH SCROLL //

$(document).ready (function(){

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  // END OF SMOOTH SCROLL //

  // START OF HOME PAGE ACTIONS //

  $("#leaf").click(function(event){
    event.preventDefault();
    console.log("leaf click function"); //debug comments

    $("#leaf-column").removeClass("col-4");
    $("#leaf-column").addClass("col-12");

    $("#drop-column").addClass("remove");
    $("#jar-column").addClass("remove");

    setTimeout(function(){
      window.location.href="/fresh.html";
    },1000);


  })

  $("#jar").click(function(event){
    event.preventDefault();
    console.log("leaf click function"); //debug comments

    $("#jar-column").removeClass("col-4");
    $("#jar-column").addClass("col-12");

    $("#drop-column").addClass("remove");
    $("#leaf-column").addClass("remove");

    setTimeout(function(){
      window.location.href="/contain.html";
    },1000);


  })

  $("#drop").click(function(event){
    event.preventDefault();
    console.log("leaf click function"); //debug comments

    $("#drop-column").removeClass("col-4");
    $("#drop-column").addClass("col-12");

    $("#jar-column").addClass("remove");
    $("#leaf-column").addClass("remove");

    setTimeout(function(){
      window.location.href="/liquid.html";
    },1000);


  })





  // END OF HOME PAGE ACTIONS //
})
