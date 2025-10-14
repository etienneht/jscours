// Exemple de variables

let jambon = "Jambon";  //variables modifiable;
const pi = 3.14159265;  //constante (non modifiable)
var age = 25;   // variables modifiable, à fort taux d'erreurs (NE SURTOUT PAS UTILISER !!!)

//Les règles de déclaration

let a = 12;
console.log(a);
// ne pas remettre let devant une variable, car cela voudrait dire qu'on la redéclare
// pour la modifier il suffit, de l'appeler par son nom et de mettre = ensuite sa nouvelle valeur
a = 4;
console.log(a);

const tau = 6.28318;
console.log(tau);
// Les constantes n'acceptent pas d'autre valeurs, que celles déclarées
// tau = 7;
// console.log(tau);
// Les deux lignes ci-dessus feront buggés le script.

var b = 40;
console.log(b);
var b = 50;
console.log(b);
// Les var peuvent être redéclarer, causant de gros problèmes de lisibilité.

//Typage Dynamique

let k = "Coucou tu veux voir ma bicylette";
console.log(k);
k = 16.2;
console.log(k);

// Type de données

// Les nombres = Number

let q = 2;  // Nombre entier
let p = 45.32; // Nombre virgule flottant
let r = -273.25;   // Nombre négatif
let s = 1 / 3; // Fraction
let t = 16800;

// Les chaînes de caractères = String

const corneille = "Ingrat, rends-moi mon Cid jusques au dernier mot.";
const moliere = "Votre sang, monsieur n\'est pas tombé dans de mauvaises mains."
console.log(moliere);
let blague = `C'est une autruche qui rentre dans un bar...`;

// Les booléans

const vrai = true;
const jeSuisFaux = false;

// Les tableaux = Array

const eleves = ["Autruche", "Joconde", 4, true];
console.log(eleves);
console.log(eleves[2]); // 4
console.log(eleves[0]); // "Autruche"
console.log(eleves[4]); // undefined, on sort des limites du tableau.
// Les tableaux n'ont pas d'index négatifs.
// Les tableaux commencent toujours par l'index 0 
// et finissent toujours par l'index égale 
// à la taille du tableau - 1;

// Les Undefined 

let d;
console.log(d);
// La variable a été déclarée, mais n'a aucune valeur, 
// alors le JS la déclare indéfinie.
// ou par exemple en sortant de limite d'un tableau, ou en ciblant un élément HTML mal écrit.
// Ce type de données est à éviter ABSOLUMENT !

// Les Nulle => Null

let x = null;

// les objets

const tasse = {
    color: "Rouge",
    material: "Céramique",
    price: 1,
    content_volume: 25
}

const eleve = {
    name: "Jean-Michel",
    age: 18,
    class: "Terminal",
    notes: [13, 18, 19, 2, 16, 15.5]
}

console.log(eleve.name);
// Calcule de la moyenne de Jean-Michel, en codage naïf
let moyenne = (eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5]) / 6;
console.log(moyenne);

// OPERATEUR

// L'affectation
// On donne la valeur 7 à la variable "aa"
let aa = 7;

// L'addition
// La valeur 7 est écrasé (remplacé) par l'addition 12 + 4 (16) 
aa = 12 + 4;
console.log(aa);
// L'affectation après l'addition on n'écrase pas la valeur mais on ajoute 4
// à l'ancienne valeur
aa += 4;
console.log(aa); // donne 20

// La soustraction
let bb = 20 - 4;
console.log(bb); // donne 16
// L'affectation après la soustraction
bb -= 4;
console.log(bb); // donne 12

// La multiplication
let cc = 4 * 4;
console.log(cc); // donne 16
// L'affectation après la multiplication
cc *= 4;
console.log(cc); // donne 64

// La division
let dd = 64 / 4;
console.log(dd); // donne 16
// L'affectation après la division
dd /= 4;
console.log(dd); // donne 4

// Le modulo
let ee = 14 % 5;
console.log(ee); // donne 4
// L'affectation après le modulo
ee %= 4;
console.log(ee); // donne 0

// L'exponentielle
let ff = 2 ** 2;
console.log(ff); // donne 4
// L'affectation après l'exponentielle
ff **= 4;
console.log(ff); // donne 256

////// Les conditions

let gg = 4;
let hh = 4;
let ii = 9;
// ⁼
if (gg == hh) {
    // si la condition est bien rempli

} else {
    // si la condition n'est pas rempli
}

// égalité non strict
if (6 == "6") {
    console.log("ça marche");
}

// égalité strict
// l'égalité strict varie en plus le type de données
// ici l'égalité est fausse car 6 et un number et 6 est une chaine de caractère
if (6 === "6") {
    console.log("ça marche");
    //////////////////
} else {
    console.log("ça marchera pas")
}

/// On va vérifier si Jean-Michel est majeur

if (eleve.age >= 18) {
    // ici on fait la concaténation 
    // (coller plusieurs chaine de caractère entre elles)
    // avec le nom de l'élève et un texte descriptif
    console.log(eleve.name + " est bien majeur");
} else {
    // Ici la concaténation de littéral de gabarit
    console.log(`${eleve.name} n'est pas majeur`);
}

const recetteIngredients = ["patate", "tomate", "ail", "oignon", "huile d'olive", "olive noir"]

const vitesseDeLaLumière = 299_754_257;

const table = [1, 2, 3];
table.push(4);
console.log(table);

const ingredients = []

//Ici on va fabriquer un plan qui permettra de construire plus simplement des ingrédients, on appelle ça en js le prototypage

/*
const sucreDeCanne = {
    nom: "Sucre de Canne",
    unite: "g",
    quantite: 75
}*/

class Ingredient {
    constructor(nom, unite, quantite) {
        this.nom = nom;
        this.unite = unite;
        this.quantite = quantite;
    }
}

class Recette {
    constructor(nom_recette, nbr_personnes, etapes, liste_ingredients) {
        this.nom_recette = nom_recette;
        this.nbr_personnes = nbr_personnes;
        this.etapes = etapes;
        this.liste_ingredients = liste_ingredients;
    }
}

const sucreDeCanne = new Ingredient("Sucre de canne", "g", 75);
const lait = new Ingredient("Lait", "cl", 25);
const oeuf = new Ingredient("Oeuf", "oeuf(s)", 3);
const pain = new Ingredient("Pain", "tranche(s) de pain", 6);
console.log(sucreDeCanne);

//Je vais donc mettre mes ingredients dans le tableau ingrédients.

ingredients.push(sucreDeCanne, lait, oeuf, pain);
console.log(ingredients);


// On va faire notre recette
const etapes = ["Fouetter les oeufs avec le sucre et le lait.",
    "Y tremper les tranches de pain.",
    "Deux solutions pour la cuisson : les cuire à la poêle dans du beurre en les faisant dorer de chaque côté, ou, les cuire au four : beurrer légèrement un plat à gratin, y répartir les tranches, verser le reste du mélange (ajouter du sucre si envie), laisser cuire à 180°C (thermostat 6) jusqu'à que les tranches soient dorées."
];

const painPerdu = new Recette("Pain perdu", 4, etapes, ingredients);
console.log(painPerdu);

//LES BOUCLES

console.log("Coucou !");
console.log("Coucou !");
console.log("Coucou !");
console.log("Coucou !");
console.log("Coucou !");

// Imaginons que j'ai besoin d'écrire dans un console.log()
// 0 patate(s) à 2000 patate(s)
// Allons-nous écrire à la main 2001 console.log() ?
// NON ! Nous allons utiliser une boucle
// et pour cet exemple nous allons utiliser la boucle for

/*
for (let i = 0; i <= 2000; i++) {
    console.log(i + " patate(s)");
}
*/

// boucle while

let n = 0;
while (n < 6) {
    console.log(n + " * 5 est égale à " + n * 5);
    n++;
}

//Exercice
//Utiliser une boucle "while" pour générer 10 nombres aléatoires
//compris entre 0 et 100, puis les afficher dans la console.

console.log("Exercice 1 :")

let m = 0;
// Si on sort la variable rand, elle génère le nombre qu'une seul fois
while (m < 10) {
    // Math.floor(Math.random() * 101)
    // 
    let rand = Math.floor(Math.random() * (100 - 0)) + 0;
    console.log(rand);
    m++;
}

//  Do while
/*
let password;
do {
    password = prompt("Entrez le mot de passe");
    console.log(password);
} while(password !== "abc123");

console.log("Tu as trouvé le mot de passe !")*/

console.log("Exercice 2 :");
// On simule un lancer de dé qui continue jusqu'à 
// ce le joueur obtienne un 6.
// On ne peut pas savoir d'avance combien de fois 
// il faudra execute la boucle

let rand1;

do {
    rand1 = Math.floor((Math.random() * 6)  + 1);
    console.log("Résultat du dé : "+ rand1)
} while(rand1 !== 6)

console.log("Tu as enfin obtenu un 6 !");

// Boucle for

for (let i = 0; i < 5; i++) {
    console.log("Compteur : " + i);
}

// Boucle for -> traverser les tableaux

let voitures = ["Dacia", "Lada", "Audi", "Daihatsu", "Toyota", "Chevrolet"];

for (let i = 0; i < voitures.length; i++) {
    console.log(voitures[i]);
}

// Boucle FOR...OF

let fruits = ["la pomme", "la banane", "le kiwi", "l'avocat", "le durian"];

for(let fruit of fruits) {
    console.log("J\'aime : " + fruit);
}

console.log("Exercice 3 :");

// Vous allez créer un ul li dans la div container
const gafam = ["Google", "Amazon", "Facebook", "Apple", "Microsoft"];
//À partir d'une boucle for of, vous allez afficher dans 
// chaque li le nom d'une de ces sociétés

const container = document.getElementById('container');
const ul = document.createElement("ul");
container.appendChild(ul);

for(let nom of gafam) {
    const li = document.createElement("li");
    li.textContent = nom;
    ul.appendChild(li);
}

//FOR IN 

const stylo = {
    taille: 15,
    marque: "bic",
    couleur: "#0000ff",
    aEncoreSonCapuchon: true
}

//on appelle le container pour pouvoir l'utiliser dans le JS
const penContainer = document.getElementById("pen-container");

//on crée une liste
const ulPen = document.createElement("ul")

//on l'accroche au container
penContainer.appendChild(ulPen);


//pour chaque clé(taille, marque, couleur etc..) dans style
for (let cle in stylo){
    //on récupère la valeur lié à la clé (taille -> 1)
    let value = stylo[cle]
    //on va créer un li pour chaque clé dans l'objet
    let li = document.createElement("li")
    //ici c'est un exemple de litteral de gabarit qui facilite l'écriture des concactenation
    //un litteral de gabarit a besoin OBLIGATOIREMENT des guillemets du 7 ``, et permet 
    //l'encapsulation du code(variable) dans une string
    
    ulPen.appendChild(li);
    console.log(value)
}

//break
for (let i = 0; i < 10; i++){
    if (i === 5) {
        break;
    }
    console.log(i)
}


console.log("----------separation--------")
//continue
//imaginons que l'on veut récupérer uniquement les nombres impairs générés par une boucle for
for (let i = 0; i < 10; i++){
    if (i % 2 === 0){
        continue;
    }
    console.log(i)
}

//exo continue 

const utilisateurs = [
    {nom: "Alice", actif: true},
    {nom: "Bob", actif: false},
    {nom: "Charlie", actif: true},
    {nom: "David", actif: false},
]

// dans un console log et avec une boucle et un continue, filtrez moi les utilisateurs pas actifs 
//dans le console log on doit lire utilisateur actif  : Alice etc

for (let i = 0; i < utilisateurs.length; i++){
    if (!utilisateurs[i].actif){
        continue;
    }

    console.log("utilisateurs actif : " + utilisateurs[i].nom)
}

//exo 2
const panier = [
    {nom: "Clavier", stock: 5 },
    {nom: "Souris", stock: 0 },
    {nom: "Ecran", stock: 3 },
    {nom: "Casque", stock: 0 },
    {nom: "Webcam", stock: 2 },
]

//dans un console log afficher uniquement les articles qui ne sont pas en rupture de srock
for (let i = 0; i < panier.length; i++){
    if (panier [i].stock === 0){
        continue;
    }
    console.log("produits à expedier disponibles : " + panier [i].nom)
    break;
}

//exo 3
//vous arrêtez la recherche (boucle) des qu'un produit est en stock

//avec une boucle while, cherchez le premier multiple de 7 dans le tableau donné, la boucle s'arrête 
//des qu'il trouve ce multiple
//affichez le dans le consol log 

const nbrs = [2, 1, 9, 13, 14, 8, 74]
let iter = 0;

while (iter < nbrs.lenght) {
    if(nbrs[iter] % 7 === 0){
        console.log("le premier multiple de 7 trouvé est" + nbrs[iter]);
        break;
    }
    iter++
}

//ecrire un programme qui parcourt un tableau de nombre avec une boucle for
//qui va aller chercher le premier nombre pair apres un nombre impair
//quand cela est fait ça coupe la boucle

const nbrs2 = [2, 18, 44, 19, 25, 14, 10, 9978]
for (let i = 1; i < nbrs2.lenght; i++){
    const precedente = nbrs2[i - 1];
    const actuel = nbrs2[i];

    const precedenteEstImpair = precedente % 2 !== 0;
    const actuelEstPair = actuel %2 === 0;

    if(precedenteEstImpair && actuelEstPair){ // precedent est impair ET actuel est pair
            console.log("premier nombre pair apres un impair : " + actuel )
            break;

        }
    }

//debeuguer
const nombres = [3, 4, 18, 5, 27, 6];
let trouve = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 9 === 0) {
        console.log("Trouve :", nombres[i])
        trouve = true
        break
    }
}

if (!trouve) {
    console.log("Aucun multiple de 9 trouvé")
}

//les tableaux

const fruits2 = ["pomme", "banane", "orange"]

//ajouter un élément à la fin du tableau
fruits2.push("fraise");
//ajouter un élément au début
fruits2.unshift("melon");
//supprimer le dernier élément 
fruits2.pop();
//supprimer le premier élément 
fruits2.shift()
console.log(fruits2)

//autres fonctions utiles

const fruits3 = ["framboise", "avocat", "coing", "poire"];

//trouver l'index d'un élément
let poseFruit = fruits3.indexOf("tomate")
console.log(poseFruit)
//verifier si un élément est présent
console.log(fruits3.includes("orange"))
//convertir un tableau en chaine de caractères
let saladeDeFruit = fruits3.join(", ")
console.log(saladeDeFruit)

//string

//connaitre la taille d'une string
let mot = "jean-Michel"
console.log(mot.length);
//attends ?? length 
console.log(mot[1]);
//on vous a menti depuis le debut les string sont des tableaux
//pour ajouter par exemple une majuscule au premier élément
let mot2 = charAt[0].toUpperCase() + mot.slice(1); // J + ean-Michel
console.log(mot2)
