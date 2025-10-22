const remainingList = document.getElementById("remaining-learner");
const btn = document.getElementById("btn");
const interrogated = document.getElementById("interrogated");

// Je créé un tableau d'élèves qui ne sera pas modifiable.

const learners = ['Jean-Michel', 'Gertrude', 'Renaud', 'Anthony', 'Eugène', 'Ernest', 'Honoré', 'Maurice', 'Raoul', 'Noël'];

// Variable qui stockera l'élève interrogé.

let interrogateLearner = "";

// Variable qui contient le tableau temporaire, qui se videra petit à petit.

let remainingLearners = [];

// Fonction qui copie le tableau

function resetRemainingLearners() {
    remainingLearners = learners.slice(); // Copie du tableau
    render();
}

resetRemainingLearners();
showInterrogatedLearner()
console.log(remainingLearners)

function render(){

    // On vide la liste ol, des li un par un
    while (remainingList.firstChild) {
        // tant que la balise ol a des balises li, on continue la boucle
        remainingList.removeChild(remainingList.firstChild)
    }

    for ( let i = 0; i < remainingLearners.length; i++){
        const li = document.createElement('li');
        li.textContent = remainingLearners[i];
        remainingList.appendChild(li);
    }
}

btn.addEventListener("click", function (){
    if(remainingLearners.length === 0){
        resetRemainingLearners()
    }

    pickLearner()
    showInterrogatedLearner()
    render()
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickLearner() {
    let rand = getRandomInt(remainingLearners.length);
    interrogateLearner = remainingLearners[rand];

    let tempLearners = [];
    for ( let i = 0; i < remainingLearners.length; i++){
        if (i !== rand){
            // si l'index choisi aléatoirement est trouvé, il ne sera
            // pas mis dans le tableau temporaire
            tempLearners.push(remainingLearners[i]);
        }
    }

    remainingLearners = tempLearners;
}

function showInterrogatedLearner() {
    interrogated.textContent = interrogateLearner || "Aucun élève à interroger"
}