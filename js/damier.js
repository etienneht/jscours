const board = document.getElementById("board");
const btn = document.getElementById("btn");

let pion = null;

// création du damier 
// boucles sur les lignes et les colonnes
for (let i = 0; i < 8; i++){ 
    for (let j = 0; j < 8; j++){

        // création d'une case
        const square = document.createElement("div");
        // ajouter la classe à toutes les cases
        square.classList.add("square");
        // alternance des couleurs noir ou lanc en fonction de pair ou impair
        if ((i + j ) % 2 === 0) {
            square.classList.add("white");

        } else {
            square.classList.add("black");
        }
        // ajoute la case au damier
        board.appendChild(square);

    }
}

btn.addEventListener("click", placePion);

function placePion(){

    // récupère toutes les cases du damier
    const squares = document.querySelectorAll(".square");

    // supprime le pion précédent
    if (pion) pion.remove();

    // choisir une case aléatoire
    const randomindex = Math.floor(Math.random() * squares.length);
    const randomSquare = squares[randomindex];

    // création du pion
    pion = document.createElement("div");
    pion.classList.add("pion")

    // couleur du pion en fonction de la case
    if (randomSquare.classList.contains("black")){
        pion.style.background = "white";

    } else {
        pion.style.background = "black";
    }
    // ajoute le pion dans la case choisie
    randomSquare.appendChild(pion);
    btn.textContent = "Déplacer le pion ♟️";
}





