    // sticky nav
    window.addEventListener("scroll" , function(){
      var navslide = document.getElementById("slide");
      navslide.classList.toggle("sticky" , window.scrollY > 220);
      });
  // wow js
      new WOW().init();

  //slide nav

     
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  
  $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('.scroll-to-section a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
      
      var target = this.hash,
      menu = target;
      var target = $(this.hash);
      $('html, body').stop().animate({
          scrollTop: (target.offset().top) + 1
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.menu li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}