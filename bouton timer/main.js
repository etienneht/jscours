const btn = document.getElementById("delayed-button")
let countdown = 5

//On désactive le button

btn.disabled = true

const interval = setInterval(function(){
    countdown--;
    if(countdown > 0){
        btn.textContent = `Attendez ${countdown} seconde${countdown > 1 ? "s" : ""}...`
    }else{
        clearInterval(interval)
        btn.disabled = false;
        btn.classList.add("enabled");
        btn.textContent = "Cliquez-moi !"
    }
}, 1000)

btn.addEventListener("click", function (){
    if(btn.disabled) return; //ici le return n'a pas d'utilité de retour, il permet uniquement de sortir
    // de la fonction quand le boutton est desactivé, ainsi on ignore la suite des instructions
    alert("Bravo : Vous avez patienté.")
})