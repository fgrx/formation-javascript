window.onload = () => {
  //récupération du formulaire
  const formElement = document.getElementById("superHeroForm");

  // Récupération des champs du formulaire
  const superHeroFormElements = formElement.elements;

  const { name, age, superpower, universe, email } = superHeroFormElements;

  //Récupération des boutons
  const validateButtonElement = document.getElementById("validateButton");
  const reinitButtonElement = document.getElementById("reinitButton");

  reinitButtonElement.addEventListener("click", () => reinitAction());
  validateButtonElement.addEventListener("click", (event) =>
    validateAction(event)
  );

  //Récupération du bloc d'erreurs
  const errorsElement = document.getElementById("errorsList");

  function reinitAction() {
    //Réinitialisation des valeurs du formulaire
    name.value = "";
    age.value = "";
    superpower.value = "";
    universe.value = "";
    email.value = "";

    reinitErrors();
  }

  function reinitErrors() {
    //supprime les messages d'erreurs
    errorMessageElements = document.querySelectorAll(".help");
    errorMessageElements.forEach(
      (errorMessage) => (errorMessage.innerHTML = "")
    );

    // Supprime la class is-danger qui signale un champ mal rempli
    inDangerElements = document.querySelectorAll(".is-danger");
    inDangerElements.forEach((element) =>
      element.classList.remove("is-danger")
    );
  }

  function validateAction(event) {
    //déclaration d'un tableau d'erreurs vide
    const errors = [];
    reinitErrors();

    //empêche le changement de page automatique après un submit
    event.preventDefault();

    //Vérifie que le nom du super héro fait au moins 3 charactères
    if (!name.value || name.value.length <= 3) {
      const error = {
        field: name,
        message: "le nom du super héro doit faire au moins 3 charactères",
      };
      errors.push(error);
    }

    //Vérifie que l'univers est renseigné
    if (!universe.value) {
      const error = {
        field: universe.parentElement,
        message: "le héro doit avoir un univers",
      };
      errors.push(error);
    }

    //Vérifie que l'âge est bien un nombre
    if (isNaN(+age.value) || !age.value) {
      const error = {
        field: age,
        message: "L'âge doit être un nombre",
      };
      errors.push(error);
    }

    // Vérifie l'adresse email
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value || !email.value.match(mailFormat)) {
      const error = {
        field: email,
        message: "L'adresse email doit être valide",
      };
      errors.push(error);
    }

    if (errors.length) {
      errors.forEach((error) => {
        error.field.classList.add("is-danger");

        const errorMessageElement = error.field.nextSibling.nextSibling;

        errorMessageElement.innerHTML = error.message;
        errorMessageElement.classList.add("is-danger");
      });

      return false;
    }

    //Soumission du formulaire
    formElement.submit();
  }
};
