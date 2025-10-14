const add = document.getElementById("add");
const remove = document.getElementById("remove");
const color = document.getElementById('color');
const container = document.getElementById('container');


add.addEventListener("click", function (){
    const div = document.createElement("div");
    div.textContent = "Nouvel élement";
    //div.classList.add("box");
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

color.addEventListener("click", function(){
    if (patate){
        container.patate.style.backgroundColor = "tomato";
    }
})