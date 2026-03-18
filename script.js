const produtos = [
    {
        nome: "Maça",
        preco: 10.00,
        quantidade: 15,
        categoria: "fruta"
    },
    {
        nome: "Banana",
        preco: 8.50,
        quantidade: 20,
        categoria: "fruta"
    },
    {
        nome: "Suco de Laranja",
        preco: 12.00,
        quantidade: 8,
        categoria: "bebida"
    },
    {
        nome: "Água Mineral",
        preco: 3.50,
        quantidade: 30,
        categoria: "bebida"
    },
    {
        nome: "Arroz",
        preco: 25.90,
        quantidade: 10,
        categoria: "alimento"
    },
    {
        nome: "Feijão",
        preco: 12.80,
        quantidade: 12,
        categoria: "alimento"
    }
];

let divContainer = document.querySelector('#div1');
let BtnCalculaTotalUnidade = document.querySelector('#BtnCalculaTotalUnidade');
let BtnCalculaTotalCategoria = document.querySelector('#calcularValorTotalPorCategoria');
let BtnListagem = document.querySelector('#BtnListagem');


function quantidadeProdutos() {
    produtos.forEach(produto => {
        div1.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: ${produto.quantidade} unidades<br>`
    }
    );
}

function calcularValorTotalPorUnidade() {
    produtos.forEach(produto => {
        div2.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: R$${(produto.quantidade * produto.preco).toFixed(2)} / Cada: R$${produto.preco} <br> <hr style="border: 1px solid #ed143c88;">`
    }
    );
}

function calcularValorTotalPorCategoria() {
    let totalPorCategoria = {}

    produtos.forEach(produto => {
        let categoria = produto.categoria
        let valor = produto.preco * produto.quantidade

        if (totalPorCategoria[categoria]) {
            totalPorCategoria[categoria] += valor
        } else {
            totalPorCategoria[categoria] = valor
        }
    })

    for (const categoria in totalPorCategoria) {
        div3.innerHTML += `<span class="nomeproduto">${categoria}</span>: R$${(totalPorCategoria[categoria])} <br> <hr style="border: 1px solid #ed143c88;">`
    }

    console.log(totalPorCategoria)
}

BtnCalculaTotalUnidade.addEventListener('click', function () {
    calcularValorTotalPorUnidade();
});

BtnCalculaTotalCategoria.addEventListener('click', function () {
    calcularValorTotalPorCategoria();
});

BtnListagem.addEventListener('click', function () {
    quantidadeProdutos();
});


