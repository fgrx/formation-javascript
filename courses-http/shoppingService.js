class ShoppingService {
  serverApiUrl = "https://shoppinglist-formation.herokuapp.com/shopping";

  async getItems() {
    try {
      const results = await axios.get(this.serverApiUrl);
      return results.data;
    } catch (error) {
      console.log("error", error);
      alert("Erreur serveur, réessayer plus tard ...");
    }
    return false;
  }

  async addItem(item) {
    try {
      const results = await axios.post(this.serverApiUrl, item);

      return results.data;
    } catch (error) {
      console.log("error", error);
      alert("Erreur serveur, réessayer plus tard ...");
    }
    return false;
  }

  async deleteItem(id) {
    try {
      const results = await axios.delete(`${this.serverApiUrl}/${id}`);

      return results.data;
    } catch (error) {
      console.log("error", error);
      alert("Erreur serveur, réessayer plus tard ...");
    }
    return false;
  }
}

export default ShoppingService;
