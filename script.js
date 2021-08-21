
let view = document.querySelector(".model")
let table = document.getElementById("table")
let th = document.querySelectorAll("th")

let input_name = document.getElementById("name")
let product = document.getElementById("product")
let alerta = document.querySelector(".alerta")


let list_product = [
    {
        id: 1,
        valor: 21.50,
        nome: "Bandeja Higiênica"
    },

    {
        id: 2,
        valor: 120.00,
        nome: "Clean Perfume"
    },

    {
        id: 3,
        valor: 9.90,
        nome: "Pente Duplo"
    },

    {
        id: 4,
        valor: 14.90,
        nome: "Condicionador Famous"
    },

    {
        id: 5,
        valor: 29.90,
        nome: "Hidrante Educador"
    },

    {
        id: 6,
        valor: 120.00,
        nome: "Creme Dental"
    },

    {
        id: 7,
        valor: 120.00,
        nome: "Escova Dental"
    },

    {
        id: 8,
        valor: 120.00,
        nome: "Ração Golden"
    },

    {
        id: 9,
        valor: 16.10,
        nome: "Ração Golden cookie"
    },

    {
        id: 10,
        valor: 21.90,
        nome: "Ração Golden Fórmula Mini"
    },

    {
        id: 11,
        valor: 34.80,
        nome: "Dog Pelucia"
    },

    {
        id: 12,
        valor: 99.00,
        nome: "Caminha iglu Cubo para Cães"
    },

    {
        id: 13,
        valor: 14.90,
        nome: "Brinquedo Mordedor para Cães"
    },

    {
        id: 14,
        valor: 54.90,
        nome: "Bolsa de transporte - fêmea"
    },

    {
        id: 15,
        valor: 29.90,
        nome: "Roupinhas para Cães - soft"
    },

    {
        id: 16,
        valor: 19.90,
        nome: "Manta SOFT par Cães e Gatos"
    },

    {
        id: 17,
        valor: 26.90,
        nome: "Fantasia Chapolin- G"
    },

    {
        id: 18,
        valor: 34.90,
        nome: "Clean Perfume"
    },

    {
        id: 19,
        valor: 69.90,
        nome: "Clean Perfume"
    },

    {
        id: 20,
        valor: 49.90,
        nome: "Guia e Peitoral para Gatos"
    },
]

let atendentes = [
    {
        id: 0,
        name: "Vinicius Silva",
        lista: [],
        table: ` <table id = "table">
        <thead>
            <th>nome</th>
            <th>preço</th>
            <th>comissão</th>
        </thead>
       
    </table>
   
    `
    },
    {
        id: 1,
        name: "Mateus Gomes",
        lista: [],
        table: `<table id = "table">
        <th>nome</th>
        <th>preço</th>
        <th>comissão</th>
           
       
    </table>
   
    
    `
    },
    {
        id: 2,
        name: "Rosângela Alves",
        lista: [],
        table: `
        <table id = "table">
        <th>nome</th>
        <th>preço</th>
        <th>comissão</th>
           
        </table>
       
    
       `
    },

    {
        id: 3,
        name: "Maicon Santos",
        lista: [],
        table: `
        <table id = "table">
        <th>nome</th>
        <th>preço</th>
        <th>comissão</th>
           
        </table>
       
    
       `
    }]

function check_clerk() {
    atendentes.forEach(i => {
        if (i.name == input_name.value) {
            push_item(i)

            product.value = ""
        }
    })
    const name = atendentes.filter((i) => { return i.name == input_name.value })

    if (name == "") {
        return alerta.classList.add("view_actived")
    }
}




function push_item(a) {
    let vendas = {}
    list_product.forEach(i => {
        if (i.id == product.value) {
            alerta.classList.remove('view_actived')
            vendas = {
                id: i.id,
                nome: i.nome,
                valor: i.valor
            }

            return a.lista.push(vendas)
        }
    })
    if (product.value > 20 || !product.value || product.value < 1) {
        return alerta.classList.add("view_actived")
    }
}


function view_model() {
    view.classList.toggle("view_actived")
}

function back() {


    atendentes.forEach(i => {

        if (event.target.innerHTML == i.name) {
            table.innerHTML = i.table


            for (index of i.lista) {


                let tbody = `
                
                    <tbody>
                        <th>${index.nome}</th>
                        <th>${index.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</th>
                         <th>${soma(index.valor)}</th>
                    </tbody>
                `

                table.innerHTML += tbody

            }
            table.innerHTML += `<table>
                <th>Total de Vendas</th>
                <th id = "total_vendas">${total_vendas()}</th>
                <th id="total_comissão">${total_comission()}</th>
             </table>`

        }

    })
    view.classList.toggle("view_actived")
}

function soma(a) {
    let soma = 0
    let somaTotal =0
    let porcentagem

    if (a <= 16.10) {
        porcentagem = 0.1
    } else {
        porcentagem = 0.15
    }
    
    soma = a * porcentagem
    const formatado = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return formatado

}





function total(a) {
    let results = []
    let result = []

   

    atendentes.forEach(i => {
        if (event.target.innerHTML == i.name) {
            i.lista.forEach(j => {

                results.push(j.valor)
                

                let sum = results.reduce((total, value, index, array) => {
                    return total + value
                })

                const formatTotal = sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                a.push(formatTotal)
                
            })
        }
    })
  
}
function calc_total_comission(a) {
    let results = []
    let result = []
    let porcentagem

    

    atendentes.forEach(i => {
        if (event.target.innerHTML == i.name) {
            i.lista.forEach(j => {
               
                if (a <= 16.10) {
                    porcentagem = 0.1
                } else {
                    porcentagem = 0.15
                }
                

                results.push(j.valor*porcentagem)
                

                let sum = results.reduce((total, value, index, array) => {
                    return total + value
                })

                const formatTotal = sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                a.push(formatTotal)
                
            })
        }
    })
  
}


function total_vendas(){
    let array= []
    total(array)
   
    return array[array.length-1]
}
function total_comission(){
    let array= []
    calc_total_comission(array)
  
    return array[array.length-1]
}