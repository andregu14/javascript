function adequacaoBRL(x) { // Formata os numeros para BRL
    const a = x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2, maximumFractionDigits: 3 })
    return a
}

function adequacaoUSD(x) { // Formata os numeros para USD
    const a = x.toLocaleString('en-US', { style: 'currency', currency: 'USD' }, { minimumFractionDigits: 2, maximumFractionDigits: 3 })
    return a
}

// Inicia a variavel global de valor da cotacao
let cotacao = ''

function recebeCotacao() {
    // Recebe valor da cotacao do usuario
    cotacao = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

    // Valida valor cotacao
    while (!isFinite(cotacao) || cotacao === '') {
        cotacao = prompt('Digite um valor valido para cotação.')
    }

    // Converte valor cotacao para numero
    cotacao = Number(cotacao)
}

function converter() {
    const res = document.getElementById('res')

    // Recebe valor de quanto dinheiro o usuario tem
    let dinheiro = prompt('Quantos R$ você tem na carteira?')

    // Valida valor de dinheiro
    while (!isFinite(dinheiro) || dinheiro < 0 || dinheiro === '') {
        dinheiro = prompt('Digite um valor válido, informando a quantidade de dinheiro que você tem.')
    }

    // Converte o valor de dinheiro para numero
    dinheiro = Number(dinheiro)

    // Calcula o valor da conversao
    let resultado = dinheiro / cotacao

    // Mostra o resultado na tela
    res.innerHTML = ''
    res.innerHTML = `Os seus ${adequacaoBRL(dinheiro)} reais, equivalem a ${adequacaoUSD(resultado)} dolares.`
}