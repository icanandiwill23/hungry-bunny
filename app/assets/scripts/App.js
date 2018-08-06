import $ from "jquery";
import OnLoad from "./modules/OnLoad";
import WayPoints from "./modules/WayPoints";

var onLoad = new OnLoad();
var cardsWayPoints = new WayPoints($(".cards"), "70%");
