/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - "escutar" o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida, baseados nos filtros solicitados pelo usuario. 
*/

const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {

    const selecionadaCategoria = document.querySelector('#categoria').value;

    const precoMaximoSelecionado = document.querySelector('#preco').value;

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        console.log('a categoria selecionada foi:', selecionadaCategoria);

        const temFiltroDeCategoria = selecionadaCategoria !== '';

        const cartaNaoBateComFiltroDeCategoria = selecionadaCategoria.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';

        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        const valorCartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) < parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});