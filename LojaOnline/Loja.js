const readlineSync = require('readline-sync'); // Importa o pacote readline-sync

// Saldo inicial do cliente
let saldo = 200.0;

// Array para armazenar os produtos no carrinho
let carrinho = [];

// Produtos disponíveis na loja
const produtos = [
    { id: 1, nome: "Camisa", preco: 50.0 },
    { id: 2, nome: "Bone", preco: 30.0 },
    { id: 3, nome: "Calça", preco: 70.0 },
    { id: 4, nome: "Tenis", preco: 100.0 }
];

// Função para exibir os produtos disponíveis
function exibirProdutos() {
    console.log("\nProdutos disponíveis:");
    produtos.forEach(produto => {
        console.log(`${produto.id} - ${produto.nome} - R$${produto.preco.toFixed(2)}`);
    });
}

// Função para adicionar produtos ao carrinho
function adicionarProdutoAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        carrinho.push(produto);
        console.log(`Produto "${produto.nome}" adicionado ao carrinho por R$${produto.preco.toFixed(2)}.`);
    } else {
        console.log("Produto não encontrado. Tente novamente.");
    }
}

// Função para calcular o total da compra
function calcularTotal() {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
}

// Função para finalizar a compra
function finalizarCompra() {
    const total = calcularTotal();
    console.log(`\nTotal da compra: R$${total.toFixed(2)}`);
    if (saldo >= total) {
        console.log("Compra realizada com sucesso!");
        saldo -= total;
    } else {
        console.log("Saldo insuficiente!");
    }
    console.log(`Saldo restante: R$${saldo.toFixed(2)}`);
}

// Função principal para executar o programa
function executarLoja() {
    console.log("Bem-vindo à Loja Online!");
    let continuar = true;

    while (continuar) {
        exibirProdutos();
        const escolha = parseInt(readlineSync.question("\nDigite o ID do produto que deseja adicionar ao carrinho (ou 0 para finalizar): "));

        if (escolha === 0) {
            continuar = false;
        } else {
            adicionarProdutoAoCarrinho(escolha);
        }
    }

    finalizarCompra();
}

// Iniciar o programa
executarLoja();