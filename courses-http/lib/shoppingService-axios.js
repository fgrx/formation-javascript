class ShoppingService {
  serverApiUrl = "https://shoppinglist-formation.herokuapp.com/shopping";

  async getItems() {
    try {
      const result = await axios.get(this.serverApiUrl);
      return result.data;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  async addItem(item) {
    try {
      const result = await axios.post(this.serverApiUrl, item);
      return result.data;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }

  deleteItem(itemID) {
    try {
      const result = axios.delete(`${this.serverApiUrl}/${itemID}`);
      return result;
    } catch (error) {
      alert("Une erreur serveur est survenue");
    }
    return false;
  }
}

export default ShoppingService;
