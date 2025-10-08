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