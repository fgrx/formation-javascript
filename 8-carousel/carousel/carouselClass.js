class Carousel {
  config;
  carouselElement;
  itemsElements = [];
  currentItemNumber = 0;
  timerID;
  zindex = 0;

  constructor(config, carouselElement) {
    this.config = config;
    this.carouselElement = carouselElement;
    this.build(this.config.items);
    this.launchCarousel();
  }

  build(items) {
    items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item-carousel");
      itemElement.innerHTML = `
      <a href="${item.url}" target="blank">
        <div class="title-carousel ">${item.title}</div>
        <img src="${item.image}" alt="${item.title}" />
      </a>`;
      this.carouselElement.append(itemElement);
      this.makeInvisibleItemElement(itemElement);
      this.itemsElements.push(itemElement);
    });

    this.makeVisibleItemElement(
      this.itemsElements[this.currentItemNumber],
      "Left"
    );

    const controlsElements = document.createElement("div");
    controlsElements.setAttribute("id", "controls");

    controlsElements.innerHTML =
      "<button id='prev' class='button is-rounded mr-3'><img src='./carousel/assets/prev.png' height='20' width='20' alt='prev' /></i></button>";
    controlsElements.innerHTML +=
      "<button id='pause' class='is-hidden button is-rounded '><img src='./carousel/assets/pause.png' height='20' width='20' alt='pause' /></i></button>";
    controlsElements.innerHTML +=
      "<button id='play' class='button is-rounded'><img src='./carousel/assets/play.png' height='20' width='20' alt='pause' /></i></button>";
    controlsElements.innerHTML +=
      "<button id='next' class='button is-rounded ml-3'><img src='./carousel/assets/next.png' height='20' width='20' alt='next' /></i></button>";

    this.carouselElement.append(controlsElements);
  }

  makeVisibleItemElement(element, direction) {
    element.style.zIndex = this.zindex++;
    element.classList.add(
      "visible",
      "animate__animated",
      `animate__fadeIn${direction}`,
      "animate__repeat-1"
    );
  }

  makeInvisibleItemElement(element) {
    element.classList.remove(
      "visible",
      "animate__animated",
      "animate__fadeInLeft",
      "animate__fadeInRight",
      "animate__repeat-1"
    );
  }

  pauseAction() {
    this.toggleButtons();
    clearInterval(this.timerID);
  }

  toggleButtons() {
    const playElement = document.getElementById("play");
    playElement.classList.toggle("is-hidden");

    const pauseElement = document.getElementById("pause");
    pauseElement.classList.toggle("is-hidden");
  }

  nextItemAction() {
    this.makeInvisibleItemElement(this.itemsElements[this.currentItemNumber]);
    let nextItemNumber = this.currentItemNumber + 1;
    if (nextItemNumber >= this.config.items.length - 1) nextItemNumber = 0;
    this.makeVisibleItemElement(this.itemsElements[nextItemNumber], "Left");
    this.currentItemNumber = nextItemNumber;
  }

  previousItemAction() {
    this.makeInvisibleItemElement(this.itemsElements[this.currentItemNumber]);
    let prevItemNumber = this.currentItemNumber - 1;
    if (prevItemNumber < 0) prevItemNumber = this.config.items.length - 1;
    this.makeVisibleItemElement(this.itemsElements[prevItemNumber], "Right");
    this.currentItemNumber = prevItemNumber;
  }

  launchCarousel() {
    this.toggleButtons();

    this.timerID = setInterval(() => {
      this.nextItemAction();
    }, this.config.slideDuration);
  }
}

export default Carousel;
