(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".profile_slider").owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      '<i><img src="assets/img/Arrow-1.svg" alt=""></i>',
      '<i><img src="assets/img/Arrow-2.svg" alt=""></i>'
    ],
    nav: true,
    // center: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  // nice select 

    $('#Contact').niceSelect();
    $('#Contact-2').niceSelect();
 

 
})(jQuery);



