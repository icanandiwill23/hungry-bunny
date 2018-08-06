import $ from "jquery";

class OnLoad{
  constructor(){
    this.events();
  }

  events(){

    $(window).on("load", function(){
      $(".large-hero__container").addClass("slideIn");
      $(".about__image").addClass("slideRight");
      $(".about__text").addClass("scaleUp");
      $(".services-item").addClass("fadeIn");
      $(".contact-us__first").addClass("left");
      $(".contact-us__second").addClass("right");
    });
  }
}

export default OnLoad;
