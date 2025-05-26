//Simulando um sistema de carregamento de dados
console.log("Inicio do script")

//setTimeout (uma unica vez)
setTimeout(()=>{
    console.log("Esta mensagem apareceu depois de 2 segundos")
}, 2000)

//setInterval (Varias vezes)
let contador = 0
let intervalo = setInterval(()=>{
    contador++
    console.log(`Repetição número ${contador}`)
    if (contador === 3){
        clearInterval(intervalo)
        co
    }
},1000)

//Promise
function buscarDadosUsuario(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const sucesso = true
            if(sucesso){
                resolve({nome:"Maria",idade:28})
            }else{
                reject("Erro ao buscar dados!")
            }
        },3000)
    })
}

buscarDadosUsuario().then((usuario)=>{
    console.log("dados recebidos com sucesso")
    console.log(usuario)
}).catch((erro)=>{
    console.log("Ocorreu um erro: ", erro)
})