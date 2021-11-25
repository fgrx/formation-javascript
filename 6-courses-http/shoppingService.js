class ShoppingService {
  async getItems() {
    try {
      const result = await axios.get("http://localhost:3000/shopping");
      return result.data;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  async addItem(item) {
    try {
      const result = await axios.post("http://localhost:3000/shopping", item);
      return result.data;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  async deleteItem(itemID) {
    try {
      const result = await axios.delete(
        `http://localhost:3000/shopping/${itemID}`
      );
      return result;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }
}

export default ShoppingService;
