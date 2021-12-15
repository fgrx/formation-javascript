class Personnage {
  image;
  positionX;
  positionY;
  speed;

  constructor(photoURL, x, y, speed) {
    this.image = document.createElement("img");
    this.image.classList.add("figure");
    this.image.src = photoURL;

    this.positionX = x;
    this.positionY = y;
    this.speed = speed;
  }

  display(target) {
    //Création du personnage
    target.append(this.image);

    //placement du personnage
    this.image.style.left = `${this.positionX}px`;
    this.image.style.top = `${this.positionY}px`;
  }

  moveDown() {
    this.positionY += this.speed;
    this.image.style.top = `${this.positionY}px`;
  }

  moveUp() {
    this.positionY -= this.speed;
    this.image.style.top = `${this.positionY}px`;
  }

  moveLeft() {
    this.positionX -= this.speed;
    this.image.style.left = `${this.positionX}px`;
  }

  moveRight() {
    this.positionX += this.speed;
    this.image.style.left = `${this.positionX}px`;
  }

  dance() {
    this.image.classList.add(
      "animate__animated",
      "animate__wobble",
      "animate__infinite"
    );
  }

  stand() {
    this.image.classList.remove(
      "animate__animated",
      "animate__wobble",
      "animate__infinite"
    );
  }
}

export default Personnage;
