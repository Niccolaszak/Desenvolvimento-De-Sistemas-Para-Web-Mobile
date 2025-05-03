const readlineSync = require('readline-sync'); // Importa o pacote readline-sync

// Saldo inicial do cliente
let saldo = 200.0;

// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarProduto(nome, preco) {
    carrinho.push({ nome, preco });
    console.log(`Produto "${nome}" adicionado ao carrinho por R$${preco.toFixed(2)}.`);
}

// Função para calcular o total da compra
function calcularTotal() {
    let total = 0;
    for (let produto of carrinho) {
        total += produto.preco;
    }
    return total;
}

// Função para finalizar a compra
function finalizarCompra() {
    const total = calcularTotal();
    console.log(`Total da compra: R$${total.toFixed(2)}`);
    saldo >= total
        ? (console.log("Compra realizada com sucesso!"), (saldo -= total))
        : console.log("Saldo insuficiente!");
    console.log(`Saldo restante: R$${saldo.toFixed(2)}`);
}

// Função para adicionar itens dinamicamente
function adicionarItensDinamicamente() {
    let continuar = true;

    while (continuar) {
        const nome = readlineSync.question("Digite o nome do produto: ");
        const preco = parseFloat(readlineSync.question("Digite o preco do produto: "));

        if (!nome || isNaN(preco) || preco <= 0) {
            console.log("Entrada invalida. Tente novamente.");
            continue;
        }

        adicionarProduto(nome, preco);

        const resposta = readlineSync.question("Deseja adicionar outro produto? (s/n): ").toLowerCase();
        continuar = resposta === 's';
    }
}

// Executar o programa
console.log("Bem-vindo a Loja Online!");
adicionarItensDinamicamente();
finalizarCompra();