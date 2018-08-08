import $ from "jquery";
import slick from "slick-carousel";

import OnLoad from "./modules/OnLoad";
import WayPoints from "./modules/WayPoints";
import Slider from "./modules/Slider";
import MobileMenu from "./modules/MobileMenu";

var onLoad = new OnLoad();
var slider = new Slider();
var mobileMenu = new MobileMenu();
var cardsWayPoints = new WayPoints($(".cards"), "70%");
