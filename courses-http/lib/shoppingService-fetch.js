class ShoppingService {
  serverApiUrl = "https://shoppinglist-formation.herokuapp.com/shopping";

  async getItems() {
    try {
      const result = await fetch(this.serverApiUrl);
      return result.json();
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  async addItem(item) {
    try {
      const result = await fetch(this.serverApiUrl, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const resultJSON = result.json();
      return await resultJSON;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  deleteItem(itemID) {
    try {
      const result = fetch(`${this.serverApiUrl}/${itemID}`, {
        method: "DELETE",
      });
      return result;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }
}

export default ShoppingService;
