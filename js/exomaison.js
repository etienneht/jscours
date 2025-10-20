//niveau 1 : compter de 1 à 10

console.log("-------- Exi 1 --------")
for (let i = 0; i <= 10; i++){
    console.log(i);
}

// let i = 1 -> la boucle commence par 1
// i <= 10 -> continue tant que i est > ou = à 10
// i++ -> ajoute +1 à chaque tour


// niveau 2 : afficher les nombres pairs juswu'à 20

console.log("-------- Exo 2 --------")
for (let i = 0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

// i % 2 === 0 -> le reste de la division de i par 2 est 0 donc i est pair

// niveau 3 : compter à rebours 

console.log("-------- Exo 3 --------")
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

// ici, on décrémente avec 1-- 
// la boucle continue tant que i est supérieur ou égal à 0

// niveau 4 : trouver le premier nombre supérieur à 10

console.log("-------- Exo 4 --------")
const nombres = [2, 5, 8, 12, 7, 18];

for (let i = 0; i < nombres.length; i++){
    if (nombres[i] > 10){
        console.log ("premier nombre supérieur à 10 est", nombres[i])
        break;
    }

}

// nombres[i] -> chaque élément du tableau
// break -> stop la boucle des qu'on a trouvè un nombre > à 10

// niveau 5 : somme des nombres

console.log("-------- Exo 5 --------")
const notes = [10, 12, 15, 8, 9]
let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}
console.log("somme =", somme);

let moyenne = somme / notes.length;
console.log("moyenne =", moyenne)

// somme = somme + notes[i] -> on additionne chaque valeur
// a la fin, on divise la somme pzr lz tzille du tableau pour avoir la moyenne

// niveau 6 : fonction : compter jusqu'à

console.log("-------- Exo 8 --------")

function compterJusqua(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

compterJusqua(12);

// n -> c'est le paramètre qu'on donne à la fonction
// on peut appeler "compterJusqua(12)"" pour compter jusqu'à 12

// niveau 7 : fonction : somme tableau

console.log("-------- Exo 7 --------")
function sommeTableau(tableau){
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

console.log(sommeTableau([4, 10, 6, 15, 8]));

// somme = somme + tableau[i] -> a chaque tour on ajoue la valeur du tableau à "somme"
// return somme -> renvoie le résultat final
// console.log(sommeTableau([4, 10, 6, 15, 8])); -> on appelle la fonction avec le tableau

// niveau 8 : trouver le plus grand nombre

console.log("-------- Exo 8 --------")
function plusGrandNombre(tab) {
    let max = tab[0];
    for(let i = 1; i < tab.length; i++) {
        if(tab[i] > max) {
            max = tab[i];
        }
    }
    return max;
}

console.log(plusGrandNombre([2, 13, 7, 24, 10, 58]));

console.log("--------------- Exos DOM ---------------")

// niveau 1 : sélectionner et modifier un élément du HTML 

console.log("-------- Exo 1 --------")
let paragraph = document.getElementById("message"); //selectionne l'id de p dans le html
console.log(paragraph);

paragraph.textContent = "Salut toi !"; //modifie le texte affiché dans le navigateur
console.log(paragraph.textContent);


// niveau 2 : modifier le style d'un élement 

console.log("-------- Exo 2 --------")
let titre = document.getElementById("titre"); // selectionne le h1
titre.style.color = "red";
titre.style.fontSize = "50px";
titre.style.textTransform = "uppercase";

console.log("Couleur appliquée :", titre.style.color);
console.log("Taille :", titre.style.fontSize);
console.log("Texte transformation :", titre.style.textTransform);
console.log("Texte final :", titre.textContent);

// niveau 3 : Ajouter du texte dans une div

console.log("-------- Exo 3 --------")
let zone = document.getElementById("zone"); // selectionne la div
zone.textContent = "Bienvenue sur ma page !"; // ajoute un texte dans la div

console.log("Texte ajouté :", zone.textContent);

// niveau 4 : créer et ajouter un nouvel élément 

console.log("-------- Exo 4 --------")
let liste = document.getElementById("liste"); // selectionne le ul
let nouvelItem = document.createElement("li"); // créé un nouvel élément ("li")
nouvelItem.textContent = "Nouveau produit"; //met du texte dedans

liste.appendChild(nouvelItem); // ajoute le li àu ul
console.log("Etat final de la liste :", liste);

// niveau 5 : réaggir à un clic sur un bouton

console.log("-------- Exo 5 --------")
let bouton = document.getElementById("bouton"); // selectionne le bouton
let resultat = document.getElementById("resultat"); // selectionne le paragraphe

bouton.addEventListener("click", function(){ // click sur le bouton
    resultat.textContent = "Bouton cliqué !"; // change le texte du paragraphe

    console.log("Texte du résultat :", resultat.textContent);

})

console.log("--------------- Exos Conditions ---------------")

// niveau 1 : pair ou impaire

console.log("-------- Exo 1 --------")
let nombre = 7; //on créé une variable nombre et on lui donne la valeur 7
if (nombre %2 === 0) { // %2 donne le reste de la division par 2
                       // si le reste est égal à 0, le nombre est pair

    console.log(nombre + " est pair"); 

} else {
    console.log(nombre + " est impair");
}

// niveau 2 : majeur ou mineur

console.log("-------- Exo 2 --------")
let age = 17; // variable age avec la valeur 17
if(age >= 18) { // si l'age est superieur ou egal à 18
    console.log("Tu es majeur !");

} else {
    console.log("Tu es mineur !");
}

// niveau 3 : note d'un élève

console.log("-------- Exo 3 --------")
let note = 14; // on créé une variable note avec la valeur 14
if (note >= 16) { // si la note superieur ou egal à 16
    console.log("Excellent !");

} else {
    console.log("Insuffisant !!!");
}

console.log("--------------- Exvenements du DOM ---------------")

// niveau 1 : bouton qui change un texte

console.log("-------- Exo 1 --------")
const text = document.getElementById("text"); // selectionne le paragraphe
const btn2 = document.getElementById("btn"); // selectionne le bouton

btn.addEventListener("click", function() { // click sur le bouton
    text.textContent = "Salut Etienne !"; // modifie le texte affiché

    console.log("Texte actuel:", text.textContent);
})

// niveau 2 : vérifier un age avec un input

console.log("-------- Exo 2 --------")
const input = document.getElementById("age");
const btn3 = document.getElementById("check");
const result = document.getElementById("result");

btn3.addEventListener("click", function(){
    let age = Number(input.value);
    console.log("Age saisi:", age);

    if (age >= 18) {
        result.textContent = "Tu es majeur !";

    } else if (age > 0){
        result.textContent = "Tu es mineur";

    } else {
        result.textContent = "Entre un age valide !";
        console.log("Résultat : invalide");
    }
})

// niveau 3 : changer la couleur du fond

console.log("-------- Exo 3 --------")
const rouge = document.getElementById("rouge");
const bleu = document.getElementById("bleu");
const vert = document.getElementById("vert");

rouge.addEventListener("click", function (){
    document.body.style.background = "crimson";
    console.log("Fond change en rouge");

})

bleu.addEventListener("click", function(){
    document.body.style.background = "royalblue";
    console.log("Fond change en bleu");
})

vert.addEventListener("click", function(){
    document.body.style.background = "seagreen";
    console.log("Fond change en vert");
})


