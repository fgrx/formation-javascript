class ShoppingService {
  async getItems() {
    try {
      const result = await fetch("http://localhost:3000/shopping");
      return result.json();
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  async addItem(item) {
    try {
      const result = await fetch("http://localhost:3000/shopping", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return result.json;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  deleteItem(itemID) {
    try {
      const result = fetch(`http://localhost:3000/shopping/${itemID}`, {
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
