import ShoppingService from "./shoppingService.js";

const shoppingService = new ShoppingService();

function buildList(items) {
  //Affichage des items dans la shoppingList
  const ulShoppginListElement = document.createElement("ul");

  items.forEach((item) => {
    // création du li dans la liste
    const liShoppingListElement = createItemInList(item);

    ulShoppginListElement.append(liShoppingListElement);
  });

  return ulShoppginListElement;
}

function createItemInList(item) {
  //création du li
  const liShoppingListElement = document.createElement("li");
  liShoppingListElement.setAttribute("data-item", item.id);

  //création du texte à l'intérieur
  const itemDate = new Date(item.date);
  const dateInFrench = itemDate.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const textItem = document.createTextNode(
    `${item.title} (ajouté le ${dateInFrench})`
  );

  // création du bouton de suppression
  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerHTML = "X";
  deleteButtonElement.classList.add(
    "is-warning",
    "button",
    "is-small",
    "delete-btn",
    "is-rounded",
    "mr-4"
  );

  deleteButtonElement.addEventListener("click", () => {
    const itemToDelete = deleteButtonElement.parentElement;
    const idToDelete = itemToDelete.getAttribute("data-item");
    shoppingService.deleteItem(idToDelete);
    itemToDelete.remove();
  });

  //Ajout du texte et du bouton
  liShoppingListElement.append(deleteButtonElement);
  liShoppingListElement.append(textItem);

  return liShoppingListElement;
}

export { buildList, createItemInList };
