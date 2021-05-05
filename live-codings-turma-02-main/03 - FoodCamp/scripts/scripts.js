
let contador = 0;

let prato;
let bebida;
let sobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;

function selecionarPrato(seletor, nome, preco) {
    prato = nome;
    precoPrato = preco;
    selecionarItem(seletor, '.pratos');
}

function selecionarBebida(seletor, nome, preco) {
    bebida = nome;
    precoBebida = preco;
    selecionarItem(seletor, '.bebidas');   
}

function selecionarSobremesa(seletor, nome, preco) {
    sobremesa = nome;
    precoSobremesa = preco;
    selecionarItem(seletor, '.sobremesas');
}

function selecionarItem(seletorClicado, seletorCategoria) {
    const seletorSelecionado = seletorCategoria + " .selecionado"
    const selecionado = document.querySelector(seletorSelecionado);

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado');
    } else {
        contador = contador + 1;
    }

    const opcao = document.querySelector(seletorClicado);
    opcao.classList.add('selecionado');

    habilitarBotaoSePedidoCompleto();
}

function habilitarBotaoSePedidoCompleto() {
    if(contador === 3) {
        const botao = document.querySelector(".fazer-pedido");
        botao.classList.add('ativo');
        botao.innerHTML = "Fechar pedido";

        const precoTotal = precoPrato + precoBebida + precoSobremesa;
        const mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + precoTotal.toFixed(2);
        const mensagemFormatada = encodeURIComponent(mensagem);

        const url = "https://wa.me/5521999998844?text=" + mensagemFormatada;
        botao.setAttribute("href", url);
    } 
}