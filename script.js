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
        promocao: false
    }
];

// Selecionando os elementos corretos
let divListagem = document.querySelector('#div1');
let divReposicao = document.querySelector('#div4');
let divPromocao = document.querySelector('#div5');
let divTotalUnidade = document.querySelector('#div2');
let divTotalCategoria = document.querySelector('#div3');

// Selecionando os botões pelos IDs corretos
let btnListagem = document.querySelector('#BtnListagem');
let btnListagemRepo = document.querySelector('#BtnListagemRepo');
let btnListagemPromo = document.querySelector('#BtnListagemPromo');
let btnCalculaTotalUnidade = document.querySelector('#BtnCalculaTotalUnidade');
let btnCalculaTotalCategoria = document.querySelector('#calcularValorTotalPorCategoria');

// Função para limpar o conteúdo de uma div
function limparDiv(div) {
    div.innerHTML = `<h2 class="titulodiv">${div.querySelector('h2') ? div.querySelector('h2').innerText : ''}</h2>`;
}

// Função para listar todos os produtos
function listarProdutos() {
    limparDiv(divListagem);
    let conteudo = divListagem.querySelector('h2').outerHTML;
    
    produtos.forEach(produto => {
        let precoComDesconto = produto.promocao ? (produto.preco * 0.9).toFixed(2) : produto.preco.toFixed(2);
        let textoPromocao = produto.promocao ? ` <span style="color: green;">[PROMOÇÃO -10%: R$${precoComDesconto}]</span>` : '';
        conteudo += `<div class="produto-item">
            <span class="nomeproduto">${produto.nome}</span>: 
            R$${produto.preco.toFixed(2)} - 
            ${produto.quantidade} unidades
            ${textoPromocao}
        </div><hr>`;
    });
    
    divListagem.innerHTML = conteudo;
}

// Função para listar produtos que precisam de reposição (quantidade < 5)
function listarReposicao() {
    limparDiv(divReposicao);
    let conteudo = divReposicao.querySelector('h2').outerHTML;
    
    produtos.forEach(produto => {
        if (produto.quantidade < 5) {
            conteudo += `<div class="produto-item">
                <span class="nomeproduto">${produto.nome}</span>: 
                ${produto.quantidade} Unidades 
                <span class="reposicao">[REPOSIÇÃO]</span>
            </div><hr>`;
        }
    });
    
    if (conteudo === divReposicao.querySelector('h2').outerHTML) {
        conteudo += "<p>Nenhum produto precisa de reposição no momento.</p>";
    }
    
    divReposicao.innerHTML = conteudo;
}

// Função para listar produtos em promoção
function listarPromocao() {
    limparDiv(divPromocao);
    let conteudo = divPromocao.querySelector('h2').outerHTML;
    let encontrouPromocao = false;
    
    produtos.forEach(produto => {
        if (produto.promocao) {
            encontrouPromocao = true;
            let precoComDesconto = (produto.preco * 0.9).toFixed(2);
            conteudo += `<div class="produto-item">
                <span class="nomeproduto">${produto.nome}</span>: 
                De R$${produto.preco.toFixed(2)} por 
                <span style="color: red; font-weight: bold;">R$${precoComDesconto}</span>
                <span style="color: green;"> [10% OFF]</span>
            </div><hr>`;
        }
    });
    
    if (!encontrouPromocao) {
        conteudo += "<p>Nenhum produto em promoção no momento.</p>";
    }
    
    divPromocao.innerHTML = conteudo;
}

// Função para calcular valor total por unidade
function calcularValorTotalPorUnidade() {
    limparDiv(divTotalUnidade);
    let conteudo = divTotalUnidade.querySelector('h2').outerHTML;
    let totalGeral = 0;
    
    produtos.forEach(produto => {
        let totalProduto = produto.quantidade * produto.preco;
        totalGeral += totalProduto;
        conteudo += `<div class="produto-item">
            <span class="nomeproduto">${produto.nome}</span>: 
            R$${totalProduto.toFixed(2)} 
            <span style="font-size: 0.8em; color: gray;">(R$${produto.preco.toFixed(2)} cada)</span>
        </div><hr>`;
    });
    
    conteudo += `<div class="total-geral" style="margin-top: 10px; font-weight: bold; font-size: 1.2em;">
        TOTAL GERAL DO ESTOQUE: R$${totalGeral.toFixed(2)}
    </div>`;
    
    divTotalUnidade.innerHTML = conteudo;
}

// Função para calcular valor total por categoria
function calcularValorTotalPorCategoria() {
    limparDiv(divTotalCategoria);
    let totalPorCategoria = {};
    let totalGeral = 0;
    
    produtos.forEach(produto => {
        let categoria = produto.categoria;
        let valor = produto.preco * produto.quantidade;
        totalGeral += valor;
        
        if (totalPorCategoria[categoria]) {
            totalPorCategoria[categoria] += valor;
        } else {
            totalPorCategoria[categoria] = valor;
        }
    });
    
    let conteudo = divTotalCategoria.querySelector('h2').outerHTML;
    
    for (let categoria in totalPorCategoria) {
        let nomeCategoria = categoria === "fruta" ? "FRUTAS" : 
                           categoria === "bebida" ? "BEBIDAS" : 
                           "ALIMENTOS";
        conteudo += `<div class="categoria-item" style="margin: 10px 0;">
            <strong style="font-size: 1.1em;">${nomeCategoria}</strong>: 
            R$${totalPorCategoria[categoria].toFixed(2)}
        </div><hr>`;
    }
    
    conteudo += `<div class="total-geral" style="margin-top: 10px; font-weight: bold; font-size: 1.2em;">
        TOTAL GERAL DO ESTOQUE: R$${totalGeral.toFixed(2)}
    </div>`;
    
    divTotalCategoria.innerHTML = conteudo;
}

// Adicionando os event listeners (com verificação de existência)
if (btnListagem) {
    btnListagem.addEventListener('click', listarProdutos);
} else {
    console.error('Botão BtnListagem não encontrado');
}

if (btnListagemRepo) {
    btnListagemRepo.addEventListener('click', listarReposicao);
} else {
    console.error('Botão BtnListagemRepo não encontrado');
}

if (btnListagemPromo) {
    btnListagemPromo.addEventListener('click', listarPromocao);
} else {
    console.error('Botão BtnListagemPromo não encontrado');
}

if (btnCalculaTotalUnidade) {
    btnCalculaTotalUnidade.addEventListener('click', calcularValorTotalPorUnidade);
} else {
    console.error('Botão BtnCalculaTotalUnidade não encontrado');
}

if (btnCalculaTotalCategoria) {
    btnCalculaTotalCategoria.addEventListener('click', calcularValorTotalPorCategoria);
} else {
    console.error('Botão calcularValorTotalPorCategoria não encontrado');
}

// Inicialização: mostrar listagem de reposição por padrão
listarReposicao();