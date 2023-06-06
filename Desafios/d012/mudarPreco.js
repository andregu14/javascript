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

    //  Inicia as variaveis para calculo
    let resultado_preco
    let variacao_preco
    let variacao_porcentagem

    // Analisa os valores e faz os calculos de acordo
    if (preco_atual > preco_anterior) {
        resultado_preco = 'Hoje o produto está mais caro.'
        variacao_preco = `subiu ${adequacaoBRL(preco_atual - preco_anterior)}`
        // Calcula a variacao em porcentagem
        let resultado_porcentagem = ((preco_atual - preco_anterior) / preco_anterior) * 100
        variacao_porcentagem = `${resultado_porcentagem.toFixed(2).replace('.', ',')}% pra cima.`
    } else if (preco_atual < preco_anterior) {
        resultado_preco = 'Hoje o produto está mais barato.'
        variacao_preco = `subiu ${adequacaoBRL(preco_anterior - preco_atual)}`
        // Calcula a variacao em porcentagem
        let resultado_porcentagem = ((preco_anterior - preco_atual) / preco_atual) * 100
        variacao_porcentagem = `${resultado_porcentagem.toFixed(2).replace('.', ',')}% pra baixo.`
    } else {
        resultado_preco = 'O preço do produto se manteve.'
        variacao_preco = `manteve o mesmo valor`
        variacao_porcentagem = `0%.`
    }


    // Mostra o resultado na tela
    setTimeout(() => {
        // Retira a animacao de loading no timeout e mostra o resultado
        document.getElementById('loading').style.display = 'none'
        res.style.display = 'flex'

        res.innerHTML += `<h2>Analisando os valores informados</h2>`
        res.innerHTML += `<p>O produto custava ${adequacaoBRL(preco_anterior)} e agora custa ${adequacaoBRL(preco_atual)}.</p>`
        res.innerHTML += `<p>${resultado_preco}</p>`
        res.innerHTML += `<p>O preço ${variacao_preco} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao_porcentagem}</p>`
    }, 1800)
}