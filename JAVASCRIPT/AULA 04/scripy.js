
//1- Crie uma função que receba um array de números e retorne a soma de todos os
//elementos.
function recebeArray(lista){
    let soma = 0;
    lista.forEach(element => {
    soma += element    
    });
    return soma;
}

let lista = [1,2,3,4,5]
console.log(recebeArray(lista))

//2- Crie uma função que receba um array de strings e retorne um novo array com todas as
//strings em letras maiúsculas.
function recebePalavras(lista){
    return lista.map(item => item.toUpperCase())
}

let palavras = ["alisson","bia","caio","daniel","eduardo"]
console.log(recebePalavras(palavras))

//3- Crie uma função que receba um array e um item, e adicione esse item ao final do array.
function adicionaItem(lista, item){
    lista.push(item)
    return lista
}
let numeros = [1,2,3,4,5]
let item = 6
console.log("Lista sem o item: " + numeros)    
console.log("Lista com o item 6 adicionado: " + adicionaItem( numeros, item))

//4- Crie uma função que remova o primeiro elemento de um array e retorne o array
//modificado.
function removePrimeiroElemento(lista){
    lista.shift()
    return lista
}
console.log("Lista sem o primeiro elemento: " + removePrimeiroElemento(numeros))

//5-Crie uma função que filtre os números pares de um array de números.
function filtraPares(lista){
    return lista.filter(item => item % 2 === 0)
}
console.log("Lista com os números pares: " + filtraPares(numeros))

//6- Crie uma função que conte quantas palavras têm mais de 5 letras em um array de strings.
function contaPalavrasDe5Letas(lista){
    return lista.filter(item => item.length > 5)
}

console.log("Lista com as palavras que tem mais de 5 letras: " + contaPalavrasDe5Letas(palavras))

//7- Crie uma função que retorne o maior número de um array.
function maiorNumero(lista){
    let n = 0
    lista.forEach(element => {
        if (element >= n) {
            n=element
        }
    });
    return n
}

console.log("Maior item da lista numeros: "+ maiorNumero(numeros))

//8- Crie uma função que receba um array de nomes e retorne uma string com todos os nomes
//separados por vírgula.
function nomesSeparadosPorVirgula(lista){
    return lista.join(", ") // join() transforma o array em string
}
let nomes = ["alisson","bia","caio","daniel","eduardo"]
console.log("Nomes separados por vírgula: " + nomesSeparadosPorVirgula(nomes))

//9- Crie uma função que receba um array e retorne um novo array com os elementos em
//ordem reversa.
function ordemReversa(lista){
    return lista.reverse()
}
let listaReversa = [1,2,3,4,5]
console.log("Lista em ordem reversa: " + ordemReversa(listaReversa))

//10- Crie uma função que receba um array de números e retorne um novo array com os
//quadrados desses números.
function quadrados(lista){
    return lista.map(item => item * item)
}
let numeros2 = [1,2,3,4,5]
console.log("Lista com os quadrados dos números: " + quadrados(numeros2))
