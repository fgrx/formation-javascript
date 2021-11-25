class Counter {
  counter = 0;
  counterDisplay = document.getElementById("counterDisplay");

  updateCounter(step) {
    this.counter = this.counter + step;
    this.displayCounter();
  }

  displayCounter() {
    this.counterDisplay.innerHTML = this.counter;
  }
}

export default Counter;
