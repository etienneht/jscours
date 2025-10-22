const showPsw = document.getElementById("password")
const lengthPswInput = document.getElementById("length")
const btn = document.getElementById("btn");

btn.addEventListener("click", generatePassword);

function generatePssword(){
    const voyels = "aeiouyAEIOUY";
    const consonents = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ";
    const noise = "0123456789!@#$%^&*()_+=<>?,.;:";

    let length = lengthPswInput.value;
    if( length < 6){
        return;
    }


}



