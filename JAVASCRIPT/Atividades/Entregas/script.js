const entregas={
    1:{
        cliente:"Nicolas",
        endereco:"Rua Dom Pedro",
        status:"A caminho" 
    },
    2:{
        cliente:"Alisson",
        endereco:"Rua Alameda",
        status:"A caminho" 
    },
    3:{
        cliente:"Vinicius",
        endereco:"Rua Presidente",
        status:"A caminho" 
    }
}

let contador = 1
let intervalo = setInterval(()=>{
    contador++
    console.log(`Repetição número ${contador}`)
    console.log(buscarDadosEntrega(entregas.contador))
    if (contador === 3){
        clearInterval(intervalo)
    }
},1000)


function buscarDadosEntrega(entrega){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const sucesso = true
            if(sucesso){
                console.log(`Olá ${entrega.cliente} sua entrega para ${entrega.endereco} esta ${entrega.status} `)
            }else{
                console.log("erro ao buscar dados da entrega!")
            }
        },1000)
    })
}

setTimeout(()=>{
    entregas.entrega1.status = "Entregue"
    entregas.entrega3.status = "Entregue"
},10000)




