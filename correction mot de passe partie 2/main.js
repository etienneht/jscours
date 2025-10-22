const showPsw = document.getElementById("password")
const wordCountInput = document.getElementById("length")
const btn = document.getElementById("btn");

// On récupère la longueur que doit faire le mot de passe.


btn.addEventListener("click", generatePassword);

function generatePassword() {

    const consonants = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ";
    const vowels = "aeuioyAEIOUY";
    const noises = "0123456789!@#$%^&*()";

    const wordcount = parseInt(wordCountInput.value);

    if (isNaN(wordcount) || wordcount < 1) {
        // Si la valeur de l'input n'est pas un nomnbre ou que ce nombre est inferieur à 0 on
        // dégage de la fonction
        return;
    }

    function getRandomChar(set){
        return set.charAt(Math.floor(Math.random() * set.length))
    }


    //Fonction qui génère uniquement un mot
    function generatePattern() {
        // La longeur à 50% de chance d'être à 5 ou à 6
        const length = Math.random() < 0.5 ? 5 : 6;
        let pattern = ""
        for (let i = 0; i < length; i++){
            pattern += i % 2 === 0 ? getRandomChar(consonants) : getRandomChar(vowels);
        }
        return pattern
    }

    function generateNoise() {
        let noise = ""
        for (let i = 0; i < 3; i++){
            noise += getRandomChar(noises)
        }
        return noise
    }

    let psw = ""

    for (let i = 0; i < wordcount; i++) {
        psw += generatePattern();
        // Pour eviter que  du noise soit générer apres le dernier mot
        if (i < wordcount - 1){
            psw += generateNoise();
        }
    }

    console.log(generateNoise())
    showPsw.textContent = psw;
}


