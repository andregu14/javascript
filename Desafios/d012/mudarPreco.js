function mudarPreco() {
    function adequacaoBRL(x) { // Formata os numeros para BRL
        const a = x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        return a
    }

    // Mostra a animacao de loading na tela
    const res = document.getElementById('res')
    document.getElementById('loading').style.display = 'block'
    res.style.display = 'none'
    res.innerHTML = ''

    // Recebe o valor do preco anterior e verifica se ele e um valor valido
    let preco_anterior = prompt('Qual era o preço anterior do produto?')
    while (!isFinite(preco_anterior) || preco_anterior === '') {
        preco_anterior = prompt('Digite um valor válido para o preço anterior!')
    }
    preco_anterior = Number(preco_anterior)

    // Recebe o valor do preco atual e verifica se ele e um valor valido
    let preco_atual = prompt('Qual é o preço atual do produto?')
    while (!isFinite(preco_atual) || preco_atual === '') {
        preco_atual = prompt('Digite um valor válido para o preço atual!')
    }
    preco_atual = Number(preco_atual)

    let resultado_preco
    let variacao_preco
    let variacao_porcentagem
    if (preco_atual > preco_anterior) {
        resultado_preco = 'Hoje o produto está mais caro.'
        variacao_preco = `subiu ${adequacaoBRL(preco_atual - preco_anterior)}`
        variacao_porcentagem = ``
    } else if (preco_atual < preco_anterior) {
        resultado_preco = 'Hoje o produto está mais barato.'
        variacao_preco = `subiu ${adequacaoBRL(preco_anterior - preco_atual)}`
    } else {
        resultado_preco = 'O preço do produto se manteve'
        variacao_preco = `manteve o mesmo valor`
    }

}