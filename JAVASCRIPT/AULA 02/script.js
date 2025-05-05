const titulo = document.getElementById("titulo");
const mensagem = document.querySelector(".msg");
const paragrafo = document.querySelectorAll("p");
const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    titulo.innerText = "Você clicou no botão!";
    document.body.style.backgroundColor = "#ffa500";
    mensagem.classList.add("destaque");
    paragrafo.forEach(function(p){
        p.innerText += "✅"; 
    })

})