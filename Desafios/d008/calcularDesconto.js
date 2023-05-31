function adequacaoBRL(x) { // Formata os numeros para BRL
    const a = x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2, maximumFractionDigits: 3 })
    return a
}

function calcularDesconto() {
    let res = document.getElementById('res')

    // Recebe input do usuario para o nome do produto
    let produto = prompt('Qual é o produto que você está comprando?')
    // Valida o input
    while (produto === '') {
        produto = prompt('Digite nome do produto')
    }

    // Recebe input do usuario para o preco do produto
    let preco_produto = prompt(`Qual é preço de ${produto.toLowerCase()}?`)
    // Valida o input
    while (!isFinite(preco_produto) || preco_produto === '') {
        preco_produto = prompt('Digite o valor do produto (use ponto ao inves de virgula para numeros decimais)')
    }

    // Transforma o input de preco para numero
    preco_produto = Number(preco_produto)

    // Calcula a porcentagem do desconto
    let desconto = (preco_produto / 100) * 10

    // Mostra o resultado na tela
    res.innerHTML = ''
    res.innerHTML += `<h2>Calculando desconto de 10% para ${produto}.</h2>`
    res.innerHTML += `<p>O preço original era ${adequacaoBRL(preco_produto)}. </p>`
    res.innerHTML += `<p>Você acaba de ganhar ${adequacaoBRL(desconto)} (-10%). </p>`
    res.innerHTML += `<p>No fim, você vai pagar ${adequacaoBRL(preco_produto - desconto)} no produto ${produto.toLowerCase()}. </p>`
}