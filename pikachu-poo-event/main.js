import Personnage from "./lib/personnage.js";

const area = document.getElementById("area");

const pikachu = new Personnage("./images/pikachu.png", 200, 200, 8);
const shrek = new Personnage("./images/shrek.png", 800, 300, 3);

const figures = [pikachu, shrek];

// Affiche tous les personnages
figures.forEach((figure) => figure.display(area));

//Bouge tous les personnages
document.addEventListener("keydown", (event) => {
  console.log("code clé", event.key);
  switch (event.key) {
    case "ArrowDown":
      figures.forEach((figure) => figure.moveDown());
      break;
    case "ArrowUp":
      figures.forEach((figure) => figure.moveUp());
      break;
    case "ArrowLeft":
      figures.forEach((figure) => figure.moveLeft());
      break;
    case "ArrowRight":
      figures.forEach((figure) => figure.moveRight());
      break;
  }
});

//fait swinger les personnages
figures.forEach((figure) => {
  figure.image.addEventListener("mouseenter", () => figure.dance());
  figure.image.addEventListener("mouseleave", () => figure.stand());
});
