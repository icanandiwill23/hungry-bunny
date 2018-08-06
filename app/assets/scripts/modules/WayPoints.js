import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min";

class WayPoints{
  constructor(els, offset){
    this.cards = els;
    this.offsetPercent = offset;
    this.hideInitially();
    this.newsWaypoints();
  }

  hideInitially(){
    this.cards.addClass("reveal-items");
  }

  newsWaypoints(){
    var that = this;
    this.cards.each(function(){
      let currentCard = this;
      new Waypoint({
        element: currentCard,
        handler: function(){
          $(currentCard).addClass("reveal-items--revealed");
        },
        offset: that.offsetPercent
      });
    });
  }

}

export default WayPoints;
