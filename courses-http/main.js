import ShoppingService from "./shoppingService.js";
const shoppingService = new ShoppingService();

//Récupère les éléments de l'interface graphique
const shoppingListULElement = document.getElementById("shoppingList");
const shoppingFormElement = document.getElementById("shoppingForm");
const { itemTitle: itemTitleElement, submitButton: submitButtonElement } =
  shoppingFormElement.elements;

submitButtonElement.onclick = async (event) => {
  event.preventDefault();

  if (itemTitleElement.value) {
    const newItem = {
      title: itemTitleElement.value,
      date: new Date(),
    };

    const addItem = await shoppingService.addItem(newItem);
    if (addItem) createItem(addItem);
    shoppingFormElement.reset();
  }
};

function createItem(item) {
  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.classList.add(
    "button",
    "is-warning",
    "is-rounded",
    "is-small",
    "mr-2"
  );
  deleteButtonElement.innerHTML = "X";
  deleteButtonElement.onclick = async () => {
    const isDeleted = await shoppingService.deleteItem(item.id);
    if (isDeleted) {
      const parentToDelete = deleteButtonElement.parentElement;
      parentToDelete.remove();
    }
  };

  const liElement = document.createElement("li");

  const dateItem = new Date(item.date);
  const dateString = dateItem.toLocaleDateString("fr-FR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  liElement.append(deleteButtonElement);
  const textLiElement = document.createTextNode(
    `${item.title} (${dateString})`
  );
  liElement.append(textLiElement);
  shoppingListULElement.append(liElement);
}

async function main() {
  const shoppingList = await shoppingService.getItems();

  shoppingList.forEach((item) => {
    createItem(item);
  });
}

main();
