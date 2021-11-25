const url = "https://randomuser.me/api/?results=10";

//Récupération des données avec async/await
async function getDatas() {
  console.log("début du fetch");
  const response = await axios.get(url);
  console.log(response.data);
  console.log("fin du fetch");
}

getDatas();
