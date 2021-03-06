
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

    $("body").addClass("animated")
    $("body").addClass("fadeOut")
    $("body").addClass("slow")

    setTimeout(function(){
      window.location.href="/fresh.html";
    },1000);

  })

  $("#drop").click(function(event){
    event.preventDefault();
    console.log("leaf click function"); //debug comments

    $("body").addClass("animated")
    $("body").addClass("fadeOut")
    $("body").addClass("slow")

    setTimeout(function(){
      window.location.href="/liquid.html";
    },1000);

  })

  $("#jar").click(function(event){
    event.preventDefault();
    console.log("leaf click function"); //debug comments

    $("body").addClass("animated")
    $("body").addClass("fadeOut")
    $("body").addClass("slow")

    setTimeout(function(){
      window.location.href="/contain.html";
    },1000);

  })


  // END OF HOME PAGE ACTIONS //
  // START OF HEADER HOVER ACTIONS //

  $("body").mousemove(function(event){
    if(event.clientY < 55){
      $("#header").removeClass("hide");
      $("#header").removeClass("fadeOutUp");
      $("#header").addClass("fadeInDown");
      $("#icon-hide1").css("visibility","visible");
      $("#icon-hide1").removeClass("fadeOutUp");
      $("#icon-hide1").addClass("fadeInDown");
      $("#icon-hide2").css("visibility","visible");
      $("#icon-hide2").removeClass("fadeOutUp");
      $("#icon-hide2").addClass("fadeInDown");

    }
    else {
      $("#header").removeClass("fadeInDown");
      $("#header").addClass("fadeOutUp");
      $("#icon-hide1").removeClass("fadeInDown");
      $("#icon-hide1").addClass("fadeOutUp");
      $("#icon-hide2").removeClass("fadeInDown");
      $("#icon-hide2").addClass("fadeOutUp");

    }
  })

  // END OF HEADER HOVER ACTIONS //
  // START OF FOOTER HOVER ACTIONS //

  $("body").mousemove(function(event){
    if(event.pageY > 4270){
      $("#footer").removeClass("hide");
      $("#footer").removeClass("fadeOutDown");
      $("#footer").addClass("fadeInUp");

    }
    else {
      $("#footer").removeClass("fadeInUp");
      $("#footer").addClass("fadeOutDown");

    }
  })

  // END OF FOOTER HOVER ACTIONS //
  // START OF H1 HOVER ACTIONS //

  $(".ethic").mouseenter(function(event){
    $("#philo1").removeClass("fadeOut")
    $("#philo1").css("visibility","visible");
    $("#philo1").addClass("fadeIn")
  })

  $(".ethic").mouseleave(function(event){
    $("#philo1").removeClass("fadeIn")
    $("#philo1").addClass("fadeOut")
  })



  $(".care").mouseenter(function(event){
    $("#philo2").removeClass("fadeOut")
    $("#philo2").css("visibility","visible");
    $("#philo2").addClass("fadeIn")
  })

  $(".care").mouseleave(function(event){
    $("#philo2").removeClass("fadeIn")
    $("#philo2").addClass("fadeOut")
  })



  $(".ethicarean").mouseenter(function(event){
    $("#philo3").removeClass("fadeOut")
    $("#philo3").css("visibility","visible");
    $("#philo3").addClass("fadeIn")
  })

  $(".ethicarean").mouseleave(function(event){
    $("#philo3").removeClass("fadeIn")
    $("#philo3").addClass("fadeOut")
  })

  // END OF H1 HOVER ACTIONS //
  // START OF ARROW ACTIONS ACTIONS //



// END OF ARROW ACTIONS ACTIONS //
// START OF COUNTER SCRIPT //

  var a = 0;
  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 1500,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
    }

  });

// END OF COUNTER SCRIPT //
// START OF DOWN ARROW HREF SCRIPT //

  // $("#down-arrow").click(function(event){
  //   console.log("arrow click function"); //debug comments
  //
  //   setTimeout(function(){
  //     $("#arrow-href").removeAttr("href","#what");
  //     console.log("remove href"); //debug comments
  //     $("#arrow-href").attr("href","#why");
  //   },10);
  //
  // })


  $("#down-arrow").click(function(event){
    if($("#arrow-href").attr("href") === "#what"){
      setTimeout(function(){
        $("#arrow-href").removeAttr("href","#what");
        $("#arrow-href").attr("href","#why");
      },10);
    }
    if($("#arrow-href").attr("href") === "#why"){
      setTimeout(function(){
        $("#arrow-href").removeAttr("href","#why");
        $("#arrow-href").attr("href","#where");
      },10);
    }
    if($("#arrow-href").attr("href") === "#where"){
      setTimeout(function(){
        $("#arrow-href").removeAttr("href","#where");
        $("#arrow-href").attr("href","#map");
      },10);
    }
    if($("#arrow-href").attr("href") === "#map"){
      setTimeout(function(){
        $("#arrow-href").removeAttr("href","#map");
        $("#arrow-href").attr("href","#signup");
      },10);
    }
    if($("#arrow-href").attr("href") === "#signup"){
      setTimeout(function(){
        $("#arrow-href").removeAttr("href","#signup");
        $("#arrow-href").attr("href","#success");
      },10);
    }
    if($("#arrow-href").attr("href") === "#success"){
      setTimeout(function(){
        $("#arrow-href").removeAttr("href","#success");
        $("#arrow-href").attr("href","#");
        $("#arrow-container").addClass("rotate");
      },10);
    }


  })


// END OF DOWN ARROW HREF SCRIPT //



  })
