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

//récuperer les class

// méthode déconseillée
//const pokemons = document.getElementsByClassName("pokemons")
//méthode standard
const pokemons = document.querySelectorAll(`.pokemons`)
//si on sait qu'il y a qu'un élémént d'une class, on peut utiliser :
const listPokemon = document.querySelector(`.list-pokemon`)
//queryselector prendra uniquement le premier élément avec ce nom de class
console.log(pokemons)
console.log(listPokemon)
const colorPokemon = ["#ebae34", "#f5b0d7", "#f5bf82", "#d2faac", "#d7c5d9"];
for (let i = 0; i < colorPokemon.length; i++) {
    pokemons[i].style.color = colorPokemon[i]
}
//ajouter une class
// element.classList.add(nom de la class)
//enlever une class
//element.classList.remove(nom de la class)
//basculer de class
//element.classList.toggle(nom de la class)


//setTimeout(function (){
    //console.log("3 secondes se sont écoulées !")

//}, 3000)

//setInterval(function (){
    //console.log("une seconde vient de passer !")

//}, 1000)

const timer = setTimeout(function (){
    console.log("3 secondes se sont écoulées !")

}, 3000)

clearTimeout(timer) // c'est plus interressant dans un évènement

const interval = setInterval(function (){
    console.log("une seconde vient de passer !")

}, 1000)

clearInterval(interval)

// TP LE SCROLL TAQUIN

const punchlines = [
  "Tu descends plus lentement qu’une mise à jour Windows 🐌",
  "Allez, on se réveille… le bas de la page va pas venir tout seul ! 😴",
  "Tu veux un café pour te motiver ou c’est une stratégie de flemme ? ☕",
  "Je pourrais tricoter un pull pendant que tu scrolles… 🧶",
  "C’est un concours de lenteur ou tu fais ça exprès ? 😅",
  "Encore un effort, c’est pas le Mont Everest non plus ⛰️",
  "Allez courage, même les tortues ont des objectifs ! 🐢",
  "Tu scrolles comme si tu voulais pas savoir la fin 📜",
  "Je vois plus de poussière que de progrès 👀",
  "On dirait que tu scrolles avec les coudes 🦾",
  "Si tu vas plus lentement, on va repartir en 2022… ⏳",
  "Il y a des glaciers qui fondent plus vite que toi 🌍",
  "Même une limace sous calmants serait déjà arrivée 🐌",
  "Tu veux qu’on t’applaudisse pour chaque pixel descendu ? 👏",
  "Tu scrolles en morse ou c’est ton style naturel ? 🧠",
  "Je me demande si t’as pas mis une brique sur la barre d’espace 🤔",
  "T’as le même rythme qu’un fax sous la pluie 📠",
  "On est sur une promenade digestive ou un vrai scroll ? 🍽️",
  "Tu vas finir par t'endormir avant d’y arriver 😴",
  "Il faut que je t’envoie une newsletter pour te motiver ? 📬",
  "Tu scrolles comme si tu testais chaque pixel à la main 🧐",
  "Courage, t’es à deux doigts d’arriver au milieu ! (ou pas...) 😇",
  "Même la barre de chargement d'Internet Explorer est jalouse de ta lenteur 💻",
  "Faut-il t’envoyer une carte au trésor pour trouver le bas ? 🗺️",
  "Si tu scrolles encore plus doucement, je vais devoir appeler ta maman 👩‍👦"
];

let intervalid = null;

// fonction qui va vérifier si nous sommes en bas de la page
function isAtTheBottomOfThePage(){
    // window.innerHeight -> correspond à la taille en pixels de votre écran
    // window.scrollY -> la position du scroll par rapport à la taille maximale de l'écran
    // document.body.scrollHeight -> c'est nos 2000 vh convertis en pixels
    // le -10 est une tolerance
    return window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
}

function startPunchlines(){
    if (intervalid === null){
        intervalid = setInterval(function (){
            if(!isAtTheBottomOfThePage()){ // tant qu'on est pas en bas de la page
                const punchline = punchlines[Math.floor( Math.random() * punchlines.length)] // il doit m'envoyer une insulte au hasard parmis les lignes du tableau punchline
                console.log(punchline)
            } else {
                console.log("Super champion tu as réussis !")
                // fonction qui arrête le crono
                stopPunchlines()
            
            }
                
            
        }, 1000)

    }
}

function stopPunchlines(){
    clearInterval(intervalid)
    intervalid = null;
}

startPunchlines()



