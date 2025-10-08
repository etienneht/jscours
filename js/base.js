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
let s = 1/3; // Fraction
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

let d ;
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
    name :"Jean-Michel",
    age: 18,
    class: "terminal",
    notes: [13, 18, 19, 2, 16, 15.5],

}

console.log(eleve.name)

let moyenne = (eleve.notes[o] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5] + eleve.notes[6]) / 6 
console.log(moyenne)

//opérateur

// l'affectation
// On donne la valeur de 7 à la variable aa
let aa:number = 7

//L'addition
//La valeur 7 est écrasée par l'addition de 12 + 4 (16)
aa = 12 + 4;

console.log(aa); //donne 16
//l'affectation après addition
//avec cette écriture on écrase pas la valeur mais on ajoute 4 à l'ancienne valeur
aa += 4;
console.log(aa) //donne 20

//La soustraction
bb = 20 - 4; //donne 16

console.log(bb); //donne 16
//l'affectation après soustration
aa -= 4;
console.log(aa) //donne 12


//La multiplication
cc = 5 * 8; //donne 40

console.log(cc); //donne 40
//l'affectation après multiplication
cc *= 2;
console.log(cc) //donne 80

//La divison
dd = 20 / 4; //donne 5

console.log(dd); //donne 5
//l'affectation après division
dd /= 2;
console.log(cc) //donne 2.5

//les modulo
let ee = 13 % 5
console.log(ee) //donne 3 

//les exponentiels
let ff = 3**2;
console.log(ff) //9

// Les conditions
let gg = 4;
let hh = 4;
let ii = 9;


if (gg == hh) {
    //si la condition est bien remplie
}else {
    // si la condition n'est pas remplie
}
//égalité non strict
if ( 6 == "6") {
    console.log("ça marche");
}

//égalité strict
//l'égalité strict vérifie en plus le type de donnée, ici l'égalité est fausse car 6 est un number et "6" est une chaine de caractère
if ( 6 === "6") {
    ////////
}else{
    console.log("ça marchera pas")
}

//on va vérifier si jean-michel est majeur
if(eleve.age >= 18){
    //ici on va faire la concaténation ( coller plusieurs chaines de caractères entre elles )
    //avec le nom de l'élève et un texte descriptif
    console.log(eleve.name + " est bien majeur.")
}else {
    //ici concaténation de litteral de gabarit
    console.log(`${eleve.name} n'est pas majeur`)
}
