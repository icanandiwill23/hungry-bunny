import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min";

class WayPoints{
  constructor(){
    this.cards = $(".cards");
    this.hideInitially();
    this.newsWaypoints();
  }

  hideInitially(){
    this.cards.addClass("reveal-items");
  }

  newsWaypoints(){
    this.cards.each(function(){
      let currentCard = this;
      new Waypoint({
        element: currentCard,
        handler: function(){
          $(currentCard).addClass("reveal-items--revealed");
        },
        offset: "80%"
      });
    });
  }

}

export default WayPoints;
