
jQuery(document).ready(function($) {
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});
document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "slidingSubmenus": false,
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "light"
                    });
                }
            );



$('.slick-carousel').slick({
  centerMode: true,
  slidesToShow: 3,
  dots: false,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  edgeFriction: 0.05,
  infinite: true, 
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});