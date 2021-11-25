import ShoppingService from "./shoppingService.js";

window.onload = () => {
  const shoppingService = new ShoppingService();
  let items = [];

  const shoppingListElement = document.getElementById("shoppingList");

  async function displayItems() {
    //Récupération des items
    items = await shoppingService.getItems();

    buildList(items);
  }

  function reinitList() {
    const ulShoppginListElement = shoppingListElement.children;
    console.log(ulShoppginListElement);
    ulShoppginListElement[0].remove();
  }

  function buildList() {
    //Affichage des items dans la shoppingList
    const ulShoppginListElement = document.createElement("ul");

    items.forEach((item) => {
      //création du li
      const liShoppingListElement = document.createElement("li");

      //création du texte à l'intérieur
      const textItem = document.createTextNode(item.title);

      // création du bouton de suppression
      const deleteButtonElement = document.createElement("button");
      deleteButtonElement.innerHTML = "X";
      deleteButtonElement.classList.add(
        "is-warning",
        "button",
        "is-small",
        "delete-btn",
        "is-rounded"
      );
      deleteButtonElement.setAttribute("data-item", item.id);
      deleteButtonElement.addEventListener("click", () => {
        const idToDelete = deleteButtonElement.getAttribute("data-item");
        shoppingService.deleteItem(idToDelete);
        items = items.filter((item) => item.id !== idToDelete);
        reinitList();
        buildList(items);
      });

      //Ajout du texte et du bouton
      liShoppingListElement.append(deleteButtonElement);
      liShoppingListElement.append(textItem);

      ulShoppginListElement.append(liShoppingListElement);
    });

    shoppingListElement.append(ulShoppginListElement);
  }

  //Lors du click sur le bouton d'ajout
  const formShoppingListElement = document.getElementById("shoppingListForm");

  formShoppingListElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemFieldElement = document.getElementById("itemField");

    if (itemFieldElement.value) {
      // Ajout en utilisant l'api rest
      const newItem = { title: itemFieldElement.value };

      const newItemFromDB = shoppingService.addItem(newItem);
      items.push(newItemFromDB);

      //Réinitialisation de la liste
      reinitList();
      buildList(items);

      //Reinitialisation du champ d'ajout
      itemFieldElement.value = "";
    }
  });

  displayItems();
};
