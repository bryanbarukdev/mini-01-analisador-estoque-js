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

function quantidadeProdutos() {
    produtos.forEach(produto => {
div1.innerHTML += produto.nome + ": " + produto.quantidade + "<br>" 
}
);
}

quantidadeProdutos();

