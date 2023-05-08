
let windowsSize = document.documentElement.clientWidth;
let nSlide = 0;
if(windowsSize ==768 || windowsSize < 768){
  nSlide = 1
}
else
{
  nSlide = 3;
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: nSlide,
      spaceBetween: 30,
  
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-button--right',
      prevEl: '.carousel-button--left',
    },
  
  });



