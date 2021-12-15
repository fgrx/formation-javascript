const modal = document.getElementById("cookie-consent-modal");

const closeButtons = document.querySelectorAll(".close-button");

closeButtons.forEach((button) => {
  button.onclick = () => {
    const buttonId = button.getAttribute("id");

    if (buttonId === "acceptButton") {
      localStorage.setItem("cookieConsent", "accepted");
      launchAnalytics();
    } else {
      localStorage.setItem("cookieConsent", "refused");
    }

    modal.classList.remove("is-active", "is-clipped");
  };
});

if (!localStorage.cookieConsent) {
  modal.classList.add("is-active", "is-clipped");
}

if (localStorage.cookieConsent === "accepted") {
  launchAnalytics();
}

function launchAnalytics() {
  console.log("Start Google Analytics");
}
