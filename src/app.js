import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronoun = ['the', 'our'];
let adj = ['green', 'prancing'];
let noun = ['dragon', 'pony'];
let domain = ['.com', '.es'];

let pronombre = Math.floor(Math.random() * pronoun.length);
let adjetivo = Math.floor(Math.random() * adj.length);
let nombre = Math.floor(Math.random() * noun.length);
let dominio = Math.floor(Math.random() * domain.length);

document.querySelector("#array").innerHTML = pronoun[pronombre] + adj[adjetivo] + noun[nombre] + domain[dominio];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }

};

