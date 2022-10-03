const frutas = ["laranja", "limão", "uva"];

let item1 = document.getElementById("fruta-1");
item1.innerHTML += frutas[0];

let item2 = document.getElementById("fruta-2");
item2.innerHTML += frutas[1];

let item3 = document.getElementById("fruta-3");
item3.innerHTML += frutas[2];

let exibir = document.getElementById("nomeDeMaisUmaFruta");

function exibirNaTela() {
  console.log(exibir.value);
}
function trocarElemento() {
  // valor do elemento p = valor que está no imput
  frutas.push(document.getElementById("nomeDeMaisUmaFruta").value);
  let item4 = document.getElementById("fruta-4");
  item4.innerHTML += frutas[3];
}
