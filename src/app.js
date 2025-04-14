import "bootstrap";
import "./style.css";

let palos = ["♣", "♠", "♥", "♦"];
let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let paloRandom = palos[Math.floor(Math.random() * palos.length)];
let numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];

const palosHTML = document.querySelectorAll(".paloGeneradoRandom");

palosHTML.forEach(span => {
  span.textContent = paloRandom;
});

document.querySelector(".numeroGeneradoRandom").textContent = numeroRandom;

if (paloRandom === "♦" || paloRandom === "♥") {
  palosHTML.forEach(span => {
    span.classList.add("rojo");
  });
}