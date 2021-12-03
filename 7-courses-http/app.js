import ShoppingService from "./lib/shoppingService-fetch.js";
import ListManager from "./lib/listManager.js";

const shoppingService = new ShoppingService();
const listManager = new ListManager(shoppingService);

let items = [];

displayItems();

async function displayItems() {
  const shoppingListElement = document.getElementById("shoppingList");

  //Récupération des items
  items = await shoppingService.getItems();

  const itemsList = listManager.buildList(items);
  shoppingListElement.append(itemsList);
}

//Lors du click sur le bouton d'ajout
const formShoppingListElement = document.getElementById("shoppingListForm");

formShoppingListElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  const itemFieldElement = document.getElementById("itemField");

  if (itemFieldElement.value) {
    // Ajout en utilisant l'api rest
    const newItem = { title: itemFieldElement.value, date: new Date() };
    const newItemFromDB = await shoppingService.addItem(newItem);
    const newItemElement = listManager.createItemInList(newItemFromDB);
    shoppingListElement.children[0].append(newItemElement);
  }
});
