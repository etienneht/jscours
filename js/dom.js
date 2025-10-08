const title = document.getElementById("title");
console.log(title);

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let clickNumber = document.getElementById("click-number");

console.log(btn);

btn.addEventListener("click", function(){
    title.innerHTML = "blblblblblblblblbl"
})

let click = 0;

btn2.addEventListener("click", function(){
    click++; // est équivalent à click += 1
    clickNumber.innerHTML = click

})

btn3.addEventListener("click", function(){
    click--; // est équivalent à click -= 1
    clickNumber.innerHTML = click

})

//avec les inputs
const inputText = document.getElementById("input-text");
const input1 = document.getElementById("input1");
input1.value = "" //permet au contenu de l'input de s'effacer à chaque rechargement

input1.addEventListener("input1", function(){
    let valueInput = this.value
    inputText.innerHTML = valueInput;
})

const mom = document.getElementById("mom");

//childNodes
//récupérer tous les éléments/noeuds ( même le texte )
console.log(mom.childNodes)
//ici, on récupère les éléments à l'intérieur de la div qui se trouve dans mom
console.log(mom.childNodes[5].childNodes)

//children
//récupère tous les éléments enfants direct de mom (pas le texte)
console.log(mom.children)

//first child ( prend le texte en compte)
console.log(mom.firstChild)

//firstElementChild
console.log(mom.firstElementChild)

//on va supprimer le premier li de mom à partir des paramètres précédents
console.log(mom.children[2].firstElementChild.firstElementChild.remove());

//création d'un élément
let img = document.createElement("img");
// on modifie son src
img.src = "https://previews.123rf.com/images/captainimages/captainimages1403/captainimages140300222/26708972-close-up-of-one-piece-of-fried-potato-chips-isolated-on-white-background.jpg"
img.alt = "une belle chips"
img.style.width = "200px";
img.style.height = "auto";

//maintenant que l'on a construit notre image, on peut "l'accrocher" à un autre élément mais en tant qu'enfant
mom.appendChild(img)