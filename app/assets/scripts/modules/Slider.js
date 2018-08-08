import $ from "jquery";

class Slider{
  constructor(){
    this.sliders();
  }

  sliders(){
    $(".menu__content").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 530,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
    });
  }
}

export default Slider;
