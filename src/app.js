/* eslint-disable */
import "bootstrap";
import "./style.css";

/*window.onload = function() {
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
lo quiero mantener como otra opcion*/

window.onload = function() {
  //write your code here
  let who = ["un ovni", "mi ordenador", "mi dinosaurio", "mi moto"];
  let what = ["aterriza", "exploto", "vomito", "rodo"];
  let when = [
    "sobre mi escritorio",
    "sobre mi tarea",
    "sobre mi libreta",
    "mientras yo estaba escribiendo",
    "durante la siesta"
  ];
  let emoji = [
    '<i class="bi bi-emoji-angry"></i>',
    '<i class="bi bi-lightning-fill"></i>',
    '<i class="bi bi-tsunami"></i>',
    '<i class="bi bi-cloud-lightning-rain"></i>'
  ];
  let image = [
    '<img src="https://live.staticflickr.com/4019/4579676563_22cac35e67_n.jpg" alt="">',
    '<img src="https://i.pinimg.com/600x315/8b/96/5c/8b965c1c3f4411395e4df7c285d9faaa.jpg" alt="">',
    '<img src="https://i.pinimg.com/474x/2b/9c/48/2b9c48883bd28e39c314c477c3b6dbc9--cold-calling-homer-simpson.jpg" alt="">'
  ];

  let whoIndex = [Math.floor(Math.random() * who.length)];
  let whatIndex = [Math.floor(Math.random() * what.length)];
  let whenIndex = [Math.floor(Math.random() * when.length)];
  let emojiIndex = [Math.floor(Math.random() * emoji.length)];
  let imageIndex = [Math.floor(Math.random() * image.length)];

  let excusa =
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    " " +
    emoji[emojiIndex];
  let divimage = document.querySelector("#image");
  let element = document.querySelector("#excusa");
  divimage.innerHTML = image[imageIndex];
  element.innerHTML = excusa;

  console.log(excusa);
};
