const add = document.getElementById("add");
const remove = document.getElementById("remove");
const color = document.getElementById('color');
const container = document.getElementById('container');
const toggle = document.getElementById("toggle");
const toggleText = document.getElementById("toggle-text")

let onOff = false;

toggle.addEventListener("click", function (){
    onOff = !onOff; // Ici on inverse l'état actuelle par son état contraire.
    // Ecriture ternaire.
    // Ecriture alternative d'un if avec des instructions courtes
    // Ci dessous est équivalent à si onOff est true alors toggleText.innerText = ON sinon toggleText.innerText = OFF
    toggleText.innerText = onOff ? "ON" : "OFF";

    if (onOff) {
        toggle.classList.add("potato");
        toggle.classList.remove("btn")
    }else {
        toggle.classList.remove("potato");
        toggle.classList.add("btn")
    }
})


add.addEventListener("click", function (){
    const div = document.createElement("div");
    let text;
    if (onOff){
        // ici je créé un nombre + pattate
        let rand = Math.round((Math.random() * 1000 - 1) + 2);
        text = rand + " patates";
    }else {
        // ici je réécris le text normale avec nouvel élément
        text = "Nouvel élement"
    }
    div.textContent = text;
    div.className = "box";
    container.appendChild(div);
})

remove.addEventListener("click", function (){
    let lastElement = container.lastElementChild
    // Si containerr à encore un element, il retournera cette element, si cette element est dans un if il retournera true
    if (lastElement) {
        container.removeChild(lastElement)
    }else{
        console.log("Le conteneur n'a pas d'enfant, suppression impossible");
    }
})

color.addEventListener("click", function() {
    if (container.firstElementChild){
        container.firstElementChild.style.backgroundColor = "tomato";
    }else{
        console.log("Le conteneur n'a pas d'enfant, coloriage impossible");
    }

})