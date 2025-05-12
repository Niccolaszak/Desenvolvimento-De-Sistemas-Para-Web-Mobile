const botao = document.getElementById("curtir");
const texto = document.getElementById("texto");
const inputNome = document.getElementById("nome");
let contador = 0;

botao.addEventListener("click", function() {
    const nome = inputNome.value;
    if (nome) {
        contador++;
        alterarTexto(nome, contador);
    }else {
        texto.innerHTML = "Por favor, digite seu nome!";
    }
});

function alterarTexto(nome, contador) {
    texto.innerText = `O usuario ${nome} curtiu ${contador} vezes.`;
}

