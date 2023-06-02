function afficherNom() {
    var nom = document.getElementById("nom").value;
    document.write("<p>Bonjour " + nom + "!</p>");
  }

  document.getElementById("bouton").addEventListener("click", afficherNom);