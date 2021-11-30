import Counter from "./CounterClass.js";

const counterManager = new Counter();
counterManager.displayCounter();

const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", () =>
  counterManager.updateCounter(1)
);

const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", () =>
  counterManager.updateCounter(-1)
);
