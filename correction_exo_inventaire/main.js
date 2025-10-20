// On va crée une classe qui représente de manière abstraite un objet d'inventaire
class Item {
    constructor(name, quantity, category) {
        this.name = name // Vous allez "injecter" la valeur que vous avez mis dans le new
        // vers la valeur interne de l'objet.
        this.quantity = quantity;
        this.category = category;
    }// Permet de faire le mot clé "new"

    // Ici on va créer une "Méthode" => Nom qu'on donne aux fonctions dans une class
    /**
    * Méthode qui génère la div d'inventaire à partir d'un instance d'Item
    * @param {number} index
    * @returns {HTMLDivElement}
     */
    createItem(index) {
        const div = document.createElement("div")
        div.className = "item " + this.category;

        const nameEl = document.createElement("p");
        nameEl.textContent = `📝 ${this.name}`;

        const catEl = document.createElement("p");
        catEl.textContent = `📂 Catégorie : ${this.category}`

        const quantityEl = document.createElement("p");
        quantityEl.textContent = `📦 Quantité : ${this.quantity}`;

        const btnRemove = document.createElement("button");
        btnRemove.textContent = '🗑️ Supprimer';

        btnRemove.addEventListener("click", function (){
            removeItem(index)
        })

        const btnPlus = document.createElement("button");
        btnPlus.textContent = '➕ +1';
        btnPlus.addEventListener("click", function (){
            // Avec l'index on recupère directement le bonne item
            // dans le tableau, on recupère sa quantité et on fait +1
            inventory[index].quantity++
            render();
            // Refaire un rendu
        })

        div.appendChild(nameEl);
        div.appendChild(catEl);
        div.appendChild(quantityEl);
        div.appendChild(btnPlus);
        div.appendChild(btnRemove);

        return div;
    }

}
const inputName = document.getElementById("name");
const inputQuantity = document.getElementById("quantity")
const selectCategory = document.getElementById("category");
const btnAdd = document.getElementById("add");
const btnClean = document.getElementById("clean");
const btnSort = document.getElementById("sort");
const selectFilter = document.getElementById("filter");
const counter = document.getElementById("counter");
const listItem = document.getElementById("inventory");

let inventory = [] // On initialise le tableau en le mettant vide.

/**
* Génère le HTML à partir du tableau inventory et des objets item à l'interieur
 * @author Le Formateur <vmichot@alaji.fr>
 */
function render() {
    // On va faire une boucle while qui va effacer les éléments
    // un par un à partir du premier enfant

    while(listItem.firstChild) { // Tant qu'il y a un enfant, la boucle tourne
        listItem.removeChild(listItem.firstChild)
    }
    // Des qu'il n'y a plus d'enfants on sort de la boucle.

    const filter = selectFilter.value;
    let count = 0;

    for (let i = 0; i < inventory.length; i++){
        const item = inventory[i]

        // Le symbole || signifie OU logique
        // le symbole "contraire" c'est && signifie le ET logique
        if(filter === "" || item.category === filter){
            const element = item.createItem(i)
            listItem.appendChild(element);
            count++
        }
    }

    if (filter === ""){
        counter.textContent = `Total dans l'inventaire : ${inventory.length} objet(s)`
    }else{
        counter.textContent = `Total des éléments filtrés : ${count} objet(s)`
    }
}

btnAdd.addEventListener("click", function (){
    const name = inputName.value.trim()
    const quantity = parseInt(inputQuantity.value);
    const cat = selectCategory.textContent;

    // On verifie que le nom n'est pas vide, que la quantité soit un nombre et
    // qu'il soit strictement superieur à 0
    if (name !== "" && !isNaN(quantity) && quantity > 0){
        inventory.push(new Item(name, quantity, cat))
        inputName.value = "";
        inputQuantity.value = "";
        render()

    }
})

btnClean.addEventListener("click", function (){
    while(inventory.length > 0) { // Tant que l'inventaire est plein la boucle tourne
        inventory.pop();
    }
    render();
})

selectFilter.addEventListener("change", function (){
    render();
})

function removeItem (index) {
    const tempInv = [];
    for( let i = 0; i < inventory.length; i++){
        // je vais mettre dans l'inventaire tous les items
        // qui n'ont pas le même index
        // qui par defaut ne sera plus dans le tableau
        if (i !== index){
            tempInv.push(inventory[i])
        }
    }
    // Ici apres "suppression" de l'index cliquer, on met donne la valeur au tableau
    // principale la valeur du tableau temporaire.
    inventory = tempInv;
    render();
}

// Fonction de tri, algo Tri par selection, "Selection sort" mais il a des ressemblance avec l'algo
// tri à bulles (Bubble sort)
// On imagine let inventaire = [
//     { nom: 'Pomme' },
//     { nom: 'Banane' },
//     { nom: 'Ananas' }
// ];

// 1 - Pomme > Banane -> On echange leur index
// 2 - Banane > Ananas -> On échange leur index
// 3 - Pomme > Banane -> on echange leur index

function nameSort(){
    // On parcourt le tableau depuis le début
    // i est l'index de l'élément qu'on est en train de comparer avec le suivants
    for (let i = 0; i < inventory.length - 1; i++){
        // On va comparer l'élément inventory[i] avec tous ceux apres lui
        // le j = i + 1, permet d'ééviter qu'il se compare à lui même.
        for ( let j = i + 1; j < inventory.length; j++ ){
            if ( inventory[i].name.toLowerCase() > inventory[j].name.toLowerCase()){
                // Ici on va inverser l'index des valeurs suivantes
                const temp = inventory[i];
                //temp = "pomme"
                inventory[i] = inventory[j];
                // Pomme devient Banane
                inventory[j] = temp;
                // Banane devient Pomme
            }
        }
    }
    render();
}

// les fonctions en callback n'on pas de parenthèse
btnSort.addEventListener("click", nameSort)

