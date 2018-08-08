import $ from "jquery";
import slick from "slick-carousel";

import OnLoad from "./modules/OnLoad";
import WayPoints from "./modules/WayPoints";
import Slider from "./modules/Slider";

var onLoad = new OnLoad();
var slider = new Slider();
var cardsWayPoints = new WayPoints($(".cards"), "70%");
