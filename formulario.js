const form = document.getElementById("form");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    if (parseInt(campoB.value) > parseInt(campoA.value)) {
        mensagem.innerHTML = "Formulário válido!";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "Formulário inválido. O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
        event.preventDefault();
    }
    event.preventDefault();
});