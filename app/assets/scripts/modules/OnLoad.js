import $ from "jquery";

class OnLoad{
  constructor(){
    this.heroContainer = $(".large-hero__container");
    this.events();
  }

  events(){
    $(window).on("load", function(){
      $(".large-hero__container").addClass("slideIn");
    });
  }
}

export default OnLoad;
