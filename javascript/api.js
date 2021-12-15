const url = "https://randomuser.me/api/?results=10";

// Fetch
console.log("Début fetch");
fetch(url)
  .then((response) => response.json())
  .then((response) => console.log(response.results));
console.log("Fin du fetch");

// // Les promises
// function getDatasFetch() {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((response) => resolve(response.results))
//       .catch((error) => reject(error));
//   });
// }

// console.log("Début du fetch");
// getDatasFetch().then((results) => console.log("Fin du fetch", results));

// // Versions await
// async function getDatasFetch() {
//   const response = await fetch(url);
//   const responseJSON = await response.json();
//   console.log(responseJSON.results);
//   console.log("Fin fetch");
//   return response;
// }

// console.log("Début fetch");
// getDatasFetch();

// //Récupération des données avec async/await et axios
// async function getDatasAxios() {
//   console.log("début Axios");
//   const response = await axios.get(url);
//   console.log(response.data);
//   console.log("fin Axios");
// }

// getDatasAxios();
