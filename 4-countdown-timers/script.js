// Nombre d'itérations
const maxSteps = 5;
const minSteps = 1;
const steps = Math.floor(Math.random() * (maxSteps - minSteps)) + minSteps;

// Récupère l'endroit où devra s'afficher le compteur
const countdownElement = document.getElementById("countdown");

// Récupère les boutons
const startButtonElement = document.getElementById("startButton");
const stopButtonElement = document.getElementById("stopButton");

let intervalId;
let currentStep;

// Fonction qui lance le timer & le réinitialise
startCounterAction = function () {
  currentStep = steps;
  startTimer();
};

stopCounterAction = function () {
  clearInterval(intervalID);
};

// fonction qui se lance à chaque passage dans l'interval
const countDown = function () {
  countdownElement.innerHTML = `<div class='step animate__animated animate__flipInX'>${currentStep}</div>`;
  currentStep--;
  if (currentStep < 0) {
    clearInterval(intervalID);
    countdownElement.innerHTML =
      "<img class='animate__animated animate__bounceIn' src='./go.png' alt='Go!' />";
  }
};

// fonction qui lance l'interval. On affecte l'id de l'interval à une variable pour pouvoir ensuite stopper l'interval
const startTimer = function () {
  intervalID = setInterval(() => countDown(), 1000);
};
