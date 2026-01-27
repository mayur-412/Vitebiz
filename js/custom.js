// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:80,
//     nav:false,
//     responsive:{
//         767:{
//             items:3
//         },
//         768:{
//             items:5
//         }
//     }
// })

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
  // autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  edgeFriction: 0.05,
  infinite: true, 
});