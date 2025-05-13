const botao = document.getElementById("curtir");
const texto = document.getElementById("texto");
const inputNome = document.getElementById("nome");
const msginicial = document.getElementById("msginicial");
let contador = 0;

botao.addEventListener("click", function() {
    const nome = inputNome.value;
    if (nome) {
        contador++;
        alterarTexto(nome, contador);
    } else {
        texto.innerHTML = "Por favor, digite seu nome!";
    }
});

// Evento input: atualiza saudação inicial
inputNome.addEventListener("input", function(evento) {
    msginicial.innerText = "Olá, " + evento.target.value + " clique no botão para curtir!";
});

// Evento keydown: loga no console toda tecla pressionada
inputNome.addEventListener("keydown", function(evento) {
    console.log(`Tecla pressionada: ${evento.key}`);
});

// Evento mouseover: adiciona classe de destaque ao botão
botao.addEventListener("mouseover", function() {
    botao.style.backgroundColor = "#28a745";
});
botao.addEventListener("mouseout", function() {
    botao.style.backgroundColor = "";
});

// Saudação personalizada após o clique
function alterarTexto(nome, contador) {
    texto.innerText = `Olá, ${nome}! Você curtiu ${contador} vezes.`;
}


