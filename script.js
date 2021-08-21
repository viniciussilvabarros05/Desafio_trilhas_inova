
let view = document.querySelector(".model")
let view1 = document.querySelector(".model1")
let view2 = document.querySelector(".model2")
let th = document.querySelectorAll("th")

let table = document.getElementById("table")
let table1 = document.getElementById("table1")
let table2 = document.getElementById("table2")

let input_name = document.getElementById("name")
let product = document.getElementById("product")
let alerta = document.querySelector(".alerta")

let total_comission = document.querySelector(".total_comissão")
let calc_item = document.getElementsByClassName("soma_item")

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
        lista: []
    },
    {
        id: 1,
        name: "Mateus Gomes",
        lista: []
    },
    {
        id: 2,
        name: "Rosângela Alves",
        lista: []
    }]

function check_clerk() {
    atendentes.forEach(i => {



        if (i.name == input_name.value) {
            push_item(i)

            product.value = ""
        }
    })

    soma()

    const name = atendentes.filter((i) => { return i.name == input_name.value })

    if (name =="") {
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

    listar(a.id, vendas.valor, vendas.nome)


}


function view_model(i) {
    let array_view = [view, view1, view2]
    array_view[i].classList.remove("view_actived")
}

function back(i) {
    let array_view = [view, view1, view2]
    array_view[i].classList.toggle("view_actived")
}

function listar(i, valor, nome) {
    let array_table = [table, table1, table2]
    array_table[i].innerHTML += `<tbody">
        <th>${nome}</th>
        <th>R$${valor}</th>
        <th>${soma()}</th>
        </tbody>`



}

function soma() {
    let soma = 0
    let total = 0
    let porcentagem
    let results = []


    atendentes.forEach(i => {
        i.lista.forEach(j => {
            if (j.valor <= 16.10) {
                porcentagem = 0.1
            } else {
                porcentagem = 0.15
            }

            soma = j.valor * porcentagem
            total = total + soma
        })



    })
    const formatado = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const formatTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    total_comission.innerHTML = formatTotal

    return formatado

}

