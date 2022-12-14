/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = generador();
};
function generador() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoI = Math.floor(Math.random() * who.length);
  let whatI = Math.floor(Math.random() * what.length);
  let whenI = Math.floor(Math.random() * when.length);

  return who[whoI] + " " + what[whatI] + " " + when[whenI] + " ";
}

console.log(generador);
