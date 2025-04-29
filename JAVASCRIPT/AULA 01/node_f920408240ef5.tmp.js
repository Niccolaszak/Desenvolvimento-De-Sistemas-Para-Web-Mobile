//Criar array de carrinho
let carrinho = [];
//Função para adicionar produto ao carrinho
function adicionarProduto(nome,preco){
    //objeto com as informações do produto
    let produto = {nome: nome, preco: preco}
    carrinho.push(produto)
    console.log(`Produto ${nome} adicionado ao carrinho.`)
}
//adicionar os produtos
console.log(`ola`)
adicionarProduto("Camiseta", 49.99)
adicionarProduto("Calça", 99.99)
adicionarProduto("Boné", 29.99)
