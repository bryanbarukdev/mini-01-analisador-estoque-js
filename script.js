const produtos = [
    // FRUTAS (10 itens)
    {
        nome: "Maçã",
        preco: 10.00,
        quantidade: 15,
        categoria: "fruta",
        promocao: true
    },
    {
        nome: "Banana",
        preco: 8.50,
        quantidade: 20,
        categoria: "fruta",
        promocao: false
    },
    {
        nome: "Laranja",
        preco: 7.90,
        quantidade: 25,
        categoria: "fruta",
        promocao: true
    },
    {
        nome: "Morango",
        preco: 15.00,
        quantidade: 8,
        categoria: "fruta",
        promocao: false
    },
    {
        nome: "Uva",
        preco: 18.50,
        quantidade: 6,
        categoria: "fruta",
        promocao: false
    },
    {
        nome: "Abacaxi",
        preco: 9.90,
        quantidade: 4,
        categoria: "fruta",
        promocao: true
    },
    {
        nome: "Mamão",
        preco: 6.80,
        quantidade: 7,
        categoria: "fruta",
        promocao: false
    },
    {
        nome: "Melancia",
        preco: 12.90,
        quantidade: 3,
        categoria: "fruta",
        promocao: true
    },
    {
        nome: "Pera",
        preco: 11.50,
        quantidade: 9,
        categoria: "fruta",
        promocao: false
    },
    {
        nome: "Limão",
        preco: 4.50,
        quantidade: 18,
        categoria: "fruta",
        promocao: false
    },

    // BEBIDAS (8 itens)
    {
        nome: "Suco de Laranja",
        preco: 12.00,
        quantidade: 8,
        categoria: "bebida",
        promocao: true
    },
    {
        nome: "Água Mineral",
        preco: 3.50,
        quantidade: 30,
        categoria: "bebida",
        promocao: false
    },
    {
        nome: "Refrigerante Cola",
        preco: 8.90,
        quantidade: 15,
        categoria: "bebida",
        promocao: true
    },
    {
        nome: "Suco de Uva",
        preco: 11.90,
        quantidade: 5,
        categoria: "bebida",
        promocao: false
    },
    {
        nome: "Cerveja",
        preco: 4.99,
        quantidade: 2,
        categoria: "bebida",
        promocao: true
    },
    {
        nome: "Energético",
        preco: 9.90,
        quantidade: 1,
        categoria: "bebida",
        promocao: false
    },
    {
        nome: "Água de Coco",
        preco: 6.50,
        quantidade: 4,
        categoria: "bebida",
        promocao: false
    },
    {
        nome: "Chá Gelado",
        preco: 7.90,
        quantidade: 3,
        categoria: "bebida",
        promocao: true
    },

    // ALIMENTOS (8 itens)
    {
        nome: "Arroz",
        preco: 25.90,
        quantidade: 10,
        categoria: "alimento",
        promocao: true
    },
    {
        nome: "Feijão",
        preco: 12.80,
        quantidade: 12,
        categoria: "alimento"
    }
];




let divContainer = document.querySelector('#div1');
let BtnCalculaTotal = document.querySelector('#BtnCalculaTotal');

function quantidadeProdutos() {
    produtos.forEach(produto => {
        if (produto.quantidade < 5) {
            div4.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: ${produto.quantidade} Unidades <span class="reposicao">[REPOSIÇÃO]</span><br>`;
        } else {
            div4.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: ${produto.quantidade} Unidades<br>`;
        }
    });
}

function calcularValorTotalPorUnidade() {
    produtos.forEach(produto => {
        div2.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: R$${(produto.quantidade * produto.preco).toFixed(2)} / R$${produto.preco} Cada <br> <hr>`
    }
    );
}

function calcularValorTotalPorCategoria() {
    let totalPorCategoria = {}
    
    produtos.forEach(produto => {
        let categoria = produto.categoria
        let valor = produto.preco * produto.quantidade
        
        if (totalPorCategoria[categoria]) {
            totalPorCategoria[categoria] += valor;
        } else {
            totalPorCategoria[categoria] = valor;
        }
        div2.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: R$${(produto.quantidade * produto.preco).toFixed(2)} / R$${produto.preco} Cada <br> <hr>`
    })
    
    console.log(totalPorCategoria)
}

BtnCalculaTotal.addEventListener('click', function () {
    calcularValorTotalPorCategoria();
});

quantidadeProdutos();
