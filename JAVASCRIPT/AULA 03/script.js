/* Função nomeada */
/* Calculadora de descontos */
function calcularDesconto(valorOriginal, percentualDesconto) {
    /* Variavel local */
    const desconto = valorOriginal * (percentualDesconto / 100)
    return valorOriginal - desconto

}

let precoOriginal = 100
let precoComDesconto = calcularDesconto(precoOriginal, 10)
console.log("Preço com desconto (Função nomeada): R$", precoComDesconto)

/* Função Anônima */
const mensageFinal = function(nomeProduto, valorFinal){
    return `O produto ${nomeProduto} sai por R$ ${valorFinal.toFixed(2)}`
}

console.log(mensageFinal("Camiseta", precoComDesconto))

/* Função com escopo local e global */
let taxa = 5
function aplicarTaxa(valor){
    let taxa = 10
    return valor + taxa
}

console.log("Valor Final com taxa R$", aplicarTaxa(90))
console.log("Taxa: ", taxa) 

/* Arrow Function */
const calcularDesconto2 = (numero) => numero * 2

console.log("Dobro de 8:", calcularDesconto2(8))