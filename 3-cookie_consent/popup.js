// Supprime le cookie consent si besoin pour nos tests
//delete localStorage.cookieConsent;

// Récupère la boite modale
const modal = document.getElementById("cookieModal");

// Si le cookie est vide, affiche la boite de cookie consent
if (!localStorage.getItem("cookieConsent")) {
  modal.classList.add("is-active", "is-clipped");
}

// Récupère les boutons qui ont la classe closeButton
const closeButtonsCollection = document.getElementsByClassName("closeButton");

// Attache un évenement qui permet de fermer la boite modale
for (closeButton of closeButtonsCollection) {
  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-active", "is-clipped");
  });
}

// Attache un évenement aux boutons d'acceptation et de refus des cookies
const acceptCookieButton = document.getElementById("acceptCookieButton");
acceptCookieButton.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
});

const refuseCookieButton = document.getElementById("refuseCookieButton");
refuseCookieButton.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "refused");
});

// Si les cookies ont étés acceptés, lance le script de Google Analystics
if (localStorage.getItem("cookieConsent") === "accepted") {
  console.log("Launch Google Analytics");
}
