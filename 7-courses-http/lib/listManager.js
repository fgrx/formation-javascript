class ListManager {
  shoppingService;

  constructor(service) {
    this.shoppingService = service;
  }

  buildList(items) {
    //Affichage des items dans la shoppingList
    const ulShoppginListElement = document.createElement("ul");

    items.forEach((item) => {
      // création du li dans la liste
      const liShoppingListElement = this.createItemInList(item);

      ulShoppginListElement.append(liShoppingListElement);
    });

    return ulShoppginListElement;
  }

  createItemInList(item) {
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
    deleteButtonElement.onclick = () => this.deleteItem(deleteButtonElement);

    //Ajout du texte et du bouton
    liShoppingListElement.append(deleteButtonElement);
    liShoppingListElement.append(textItem);

    return liShoppingListElement;
  }

  deleteItem(deleteButtonClicked) {
    const itemToDelete = deleteButtonClicked.parentElement;
    const idToDelete = itemToDelete.getAttribute("data-item");
    this.shoppingService.deleteItem(idToDelete);
    itemToDelete.remove();
  }
}

export default ListManager;
