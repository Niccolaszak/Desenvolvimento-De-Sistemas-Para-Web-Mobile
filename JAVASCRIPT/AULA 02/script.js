const titulo = document.getElementById("titulo");
const mensagem = document.querySelector(".msg");
const paragrafo = document.querySelectorAll("p");
const botao = document.getElementById("botao");

const inputNome = document.getElementById("nome");
const enviar = document.getElementById("enviar");
const saudacao = document.getElementById("saudacao");

botao.addEventListener("click", function(){
    titulo.innerText = "Você clicou no botão!";
    document.body.style.backgroundColor = "#ffa500";
    mensagem.classList.add("destaque");
    paragrafo.forEach(function(p){
        p.innerText += "✅"; 
    })
})


function exibirSaudacao() {
    const nome = inputNome.value;
    saudacao.innerText = `Olá, ${nome}! Seja bem-vindo(a) ao nosso site!`;
}

enviar.addEventListener("click", exibirSaudacao);

enviar.addEventListener("mouseover", function(){
    enviar.style.backgroundColor = "#4CAF50"; // Verde
    enviar.style.color = "white";
})

inputNome.addEventListener("input", function(){
//    alert("Texto sendo digitado");
})

inputNome.addEventListener("keydown", function(event){
    alert(`A tecla foi pressionada ${event.key}`);
})

enviar.addEventListener("mouseout", function(){
    enviar.style.backgroundColor = "#f0f0f0";
    enviar.style.color = "black";

})