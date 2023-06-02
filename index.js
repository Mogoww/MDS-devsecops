let titleElement = document.getElementById("title");
let name = new URLSearchParams(window.location.search).get("name");
console.log(name);
console.log(titleElement);
console.log(titleElement.innerHTML);
if (name !== null) {
  titleElement.innerHTML = `Hello name ${name}!`;
}