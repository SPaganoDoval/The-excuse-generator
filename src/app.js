/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = generador();
};
function generador() {
  let who = ["un ovni", "mi ordenador", "mi dinosaurio", "mi moto"];
  let what = ["aterriza", "exploto", "vomito", "rodo"];
  let when = [
    "sobre mi escritorio",
    "sobre mi tarea",
    "sobre mi libreta",
    "mientras yo estaba escribiendo",
    "durante la siesta"
  ];
  let whoI = Math.floor(Math.random() * who.length);
  let whatI = Math.floor(Math.random() * what.length);
  let whenI = Math.floor(Math.random() * when.length);

  return who[whoI] + " " + what[whatI] + " " + when[whenI] + " ";
}

console.log(generador);
