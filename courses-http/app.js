import ShoppingService from "./lib/shoppingService-fetch.js";
import ListManager from "./lib/listManager.js";

const shoppingService = new ShoppingService();
const listManager = new ListManager(shoppingService);

let items = [];

displayItems();

const shoppingListElement = document.getElementById("shoppingList");

async function displayItems() {
  //Récupération des items
  items = await shoppingService.getItems();

  const itemsList = listManager.buildList(items);
  shoppingListElement.append(itemsList);
}

//Lors du click sur le bouton d'ajout
const formShoppingListElement = document.getElementById("shoppingListForm");
const formElements = formShoppingListElement.elements;

formShoppingListElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { itemToBuy } = formElements;

  if (itemToBuy.value) {
    // Ajout en utilisant l'api rest
    const newItem = { title: itemToBuy.value, date: new Date() };
    const newItemFromDB = await shoppingService.addItem(newItem);
    const newItemElement = listManager.createItemInList(newItemFromDB);
    shoppingListElement.children[0].append(newItemElement);
  }
});
