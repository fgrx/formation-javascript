import ShoppingService from "./lib/shoppingService.js";
import { buildList, createItemInList } from "./lib/listManager.js";

const shoppingService = new ShoppingService();
let items = [];

const shoppingListElement = document.getElementById("shoppingList");

displayItems(shoppingListElement);

async function displayItems(list) {
  //Récupération des items
  items = await shoppingService.getItems();

  const itemsList = buildList(items);
  list.append(itemsList);
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
    const newItemElement = createItemInList(newItemFromDB);
    shoppingListElement.children[0].append(newItemElement);
  }
});
