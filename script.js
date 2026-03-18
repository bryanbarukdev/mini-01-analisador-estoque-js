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
        categoria: "alimento",
        promocao: true
    },
    {
        nome: "Macarrão",
        preco: 5.90,
        quantidade: 18,
        categoria: "alimento",
        promocao: false
    },
    {
        nome: "Óleo de Soja",
        preco: 8.99,
        quantidade: 7,
        categoria: "alimento",
        promocao: false
    },
    {
        nome: "Sal",
        preco: 2.50,
        quantidade: 22,
        categoria: "alimento",
        promocao: false
    },
    {
        nome: "Açúcar",
        preco: 4.90,
        quantidade: 14,
        categoria: "alimento",
        promocao: true
    },
    {
        nome: "Café",
        preco: 16.90,
        quantidade: 5,
        categoria: "alimento",
        promocao: false
    },
    {
        nome: "Farinha de Trigo",
        preco: 6.80,
        quantidade: 9,
        categoria: "alimento",
        promocao: true
    },

    // HORTIFRÚTI (8 itens)
    {
        nome: "Batata",
        preco: 5.99,
        quantidade: 25,
        categoria: "hortifruti",
        promocao: true
    },
    {
        nome: "Cebola",
        preco: 4.99,
        quantidade: 20,
        categoria: "hortifruti",
        promocao: false
    },
    {
        nome: "Tomate",
        preco: 7.90,
        quantidade: 12,
        categoria: "hortifruti",
        promocao: true
    },
    {
        nome: "Alface",
        preco: 3.50,
        quantidade: 8,
        categoria: "hortifruti",
        promocao: false
    },
    {
        nome: "Cenoura",
        preco: 4.50,
        quantidade: 15,
        categoria: "hortifruti",
        promocao: false
    },
    {
        nome: "Pimentão",
        preco: 6.90,
        quantidade: 5,
        categoria: "hortifruti",
        promocao: true
    },
    {
        nome: "Alho",
        preco: 2.99,
        quantidade: 3,
        categoria: "hortifruti",
        promocao: false
    },
    {
        nome: "Abóbora",
        preco: 4.90,
        quantidade: 2,
        categoria: "hortifruti",
        promocao: true
    },

    // LIMPEZA (6 itens)
    {
        nome: "Detergente",
        preco: 2.99,
        quantidade: 15,
        categoria: "limpeza",
        promocao: false
    },
    {
        nome: "Sabão em Pó",
        preco: 18.90,
        quantidade: 7,
        categoria: "limpeza",
        promocao: true
    },
    {
        nome: "Desinfetante",
        preco: 8.50,
        quantidade: 5,
        categoria: "limpeza",
        promocao: false
    },
    {
        nome: "Esponja",
        preco: 1.99,
        quantidade: 3,
        categoria: "limpeza",
        promocao: true
    },
    {
        nome: "Luvas",
        preco: 6.90,
        quantidade: 2,
        categoria: "limpeza",
        promocao: false
    },
    {
        nome: "Água Sanitária",
        preco: 4.50,
        quantidade: 1,
        categoria: "limpeza",
        promocao: true
    }
];

let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');
let div4 = document.querySelector('#div4');
let div5 = document.querySelector('#div5');
let BtnCalculaTotalUnidade = document.querySelector('#BtnCalculaTotalUnidade');
let BtnCalculaTotalCategoria = document.querySelector('#calcularValorTotalPorCategoria');
let BtnListagem = document.querySelector('#BtnListagem');
let BtnListagemPromo = document.querySelector('#BtnListagemPromo');
let BtnListagemRepo = document.querySelector('#BtnListagemRepo');

function listagemProdutos() {
    produtos.forEach(produto => {
        div1.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: ${produto.quantidade} Unidades<br>`;
    });
}

function listagemPromo() {
    produtos.forEach(produto => {
        if (produto.promocao == true) {
            div5.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: ${produto.quantidade} Unidades <span class="reposicao">[PROMOÇÃO]</span><br>`;
        }
        div5.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: ${produto.quantidade} Unidades <br>`;
    });
}

function avisoRepo() {
    div4.innerHTML += '<span class="msg">*Prod. com menos de 5 Uni. São marcados para Reposição</span><br><br>';
}

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
        div2.innerHTML += `<span class="nomeproduto">${produto.nome}</span>: R$${(produto.quantidade * produto.preco).toFixed(2)} / Cada: R$${produto.preco.toFixed(2)} <br> <hr style="border: 1px solid #ed143c88;">`;
    });
}

function calcularValorTotalPorCategoria() {
    let totalPorCategoria = {};

    produtos.forEach(produto => {
        let categoria = produto.categoria;
        let valor = produto.preco * produto.quantidade;

        if (totalPorCategoria[categoria]) {
            totalPorCategoria[categoria] += valor;
        } else {
            totalPorCategoria[categoria] = valor;
        }
    });

    for (const categoria in totalPorCategoria) {
        div3.innerHTML += `<span class="nomeproduto">${categoria}</span>: R$${totalPorCategoria[categoria].toFixed(2)} <br> <hr style="border: 1px solid #ed143c88;">`;
    }

    console.log(totalPorCategoria);
}

BtnCalculaTotalUnidade.addEventListener('click', function() {
    calcularValorTotalPorUnidade();
});

BtnCalculaTotalCategoria.addEventListener('click', function() {
    calcularValorTotalPorCategoria();
});

BtnListagem.addEventListener('click', function() {
    listagemProdutos();
});

BtnListagemPromo.addEventListener('click', function() {
    listagemPromo();
});

BtnListagemRepo.addEventListener('click', function() {
    avisoRepo();
    quantidadeProdutos();
});