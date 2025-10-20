const panier = [
    { name: "Pomme", price: 2, quantity: 5},
    { name: "Kiwi", price: 1, quantity: 50},
    { name: "Mangue", price: 9, quantity: 25},
]


// fonction qui additionne 2 nombres

// c'est une fonction utilitaire

function add(nbrA, nbrB){
    return nbrA + nbrB;
}

// autre fonction utilitaire

function multiply(nbrA, nbrB){
    return nbrA * nbrB;
}

// fonction principale qui va calculer le prix total du panier

function calculatePriceCart(cart){
    // avant de calculer, on va initialiser le total
    let total = 0;

    for (let i = 0; i < cart.length; i++){
        // pour faciliter la lecture, on renomme l'élément actuel de la boucle par une variable plus simple à écrire
        const item = cart[i];
        // le retour de la fonction multiply "injecte" son résultat dans itemPriceTotal
        const itemPriceTotal = multiply(item.price, item.quantity);
        total = add(total, itemPriceTotal)
    }
    return total
}

console.log(calculatePriceCart(panier))

//faire une fonction qui retourne le nombre de voyelles dans un mot mis en paramètres

//exemple console.log(compterVoyelle(bonjour)) -> 3

function compterVoyelles(chaine) {
    let voyelles = "aeiouyAEIOUY";
    let compteur = 0;

    for (let i = 0; i < chaine.length; i++){
        if (voyelles.includes(chaine[i]))
            compteur ++
    }
}

console.log(compterVoyelles("bonjour"));

//faire une fonction qui prend en paramètre un tableau de nombres
//et retourne le nombre le plus grand du tableau

const exotbl = ["3", "7", "2", "9", "5"]
const exotbl2 = ["-5", "-2", "-10"]

function trouverLeMaxDansTableau(tableau){

    let max = tableau[0]
    for (let i = 1; i < tableau.lenght; i++){
        if (tableau[i] > max){
            max = tableau[i];
        }
        
    }
    return max
}

console.log(trouverLeMaxDansTableau(exotbl))

// === ÉNONCÉ ===

// Ajouter un champ de texte (input), un bouton "Ajouter" et une liste <ul> directement dans le HTML.
// Donner un id à chacun de ces éléments pour pouvoir les manipuler en JavaScript.

// Quand l'utilisateur saisit du texte dans l'input et clique sur le bouton,
// cela doit créer un nouvel élément <li> contenant le texte saisi,
// et l'ajouter à la liste <ul> affichée à l'écran.

// Le texte saisi doit aussi être ajouté dans un tableau JavaScript.
// À chaque modification du tableau, la liste <ul> doit être regénérée
// (c’est-à-dire qu’on affiche tous les <li> du tableau, pas seulement le dernier ajouté).

// BONUS : le fait d’appuyer sur la touche "Entrée" doit avoir le même effet
// que de cliquer sur le bouton.


const text = document.getElementById("text");
const addd = document.getElementById("addd");
const list = document.getElementById("list");

addd.addEventListener("click", function (){
    const li = document.createElement("li");
})

