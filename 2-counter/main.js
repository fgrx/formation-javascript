import Counter from "./CounterClass.js";

window.onload = () => {
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
};
