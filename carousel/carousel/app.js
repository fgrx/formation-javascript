import config from "./config.js";
import Carousel from "./carouselClass.js";

const carouselElement = document.getElementById("carousel");

const carousel = new Carousel(config, carouselElement);

const pauseElement = document.getElementById("pause");
pauseElement.addEventListener("click", () => carousel.pauseAction());

const playElement = document.getElementById("play");
playElement.addEventListener("click", () => carousel.launchCarousel());

const prevElement = document.getElementById("prev");
prevElement.addEventListener("click", () => carousel.previousItemAction());

const nextElement = document.getElementById("next");
nextElement.addEventListener("click", () => carousel.nextItemAction());
