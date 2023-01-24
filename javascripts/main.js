//LIGHTBOX
$(document).ready(function(){
    $('.lightbox').nivoLightbox();
});

//SCROLL TO TOP
$(document).ready(function () {
  $('.scroll-to-top').hide();
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});
$('.scroll-to-top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 800);
  return false;
  });
});


$(window).on('load', function() {
  $('#slider').nivoSlider({
      effect:'fade',
      animSpeed:2000,
      pauseTime:7000,
      directionNav:false,
      captionOpacity:0.80, //Universal caption opacity
      controlNav:false,
      keyboardNav:false,
      pauseOnHover:false
        });
});

//Accordion Script
    $("#acc dd").hide();
    $("#acc dt").click(function () {
        $(this).next("#acc dd").slideToggle(300);
        $(this).toggleClass("expanded");
    });
    
