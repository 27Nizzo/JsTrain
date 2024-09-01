const tentativa = document.getElementById("tentativa")

tentativa.addEventListener("input", function() {
    this.value = this.value.toLowerCase();
})

let counter = 0;
let correctSubmissions = [];


function reverseStr(str) {
    return str.split("").reverse().join("");
}


function checkPalindrome() {
    const value = tentativa.value;

    if(correctSubmissions.includes(value)) {
        alert("You already used that palindrome! No cheat!!")
        counter = 0;
    } else {

    if(value === reverseStr(value)){
        //alert("Correto");
        correctSubmissions.push(value)
        counter += 1;


    }
    else {
        //alert("Incorreto");
        counter = 0;
    }
}
    tentativa.value = ""
    document.getElementById("acertadas").innerText = counter;
}
