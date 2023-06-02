// function afficherNom() {
//     var nom = document.getElementById("nom").value;
//     document.write("<p>Bonjour " + nom + "!</p>");
//   }

//   document.getElementById("bouton").addEventListener("click", afficherNom);

let titleElement = document.getElementById("title");
let name = new URLSearchParams(window.location.search).get("name");
if (name !== null) {
  titleElement.innerHTML = `Hello name`;
}