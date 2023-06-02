function verificarAnoBissexto() {
    // Adiciona a animacao de loading na tela
    document.getElementById('loading').style.display = 'block'
    const res = document.getElementById('res')
    res.style.display = 'none'
    res.innerHTML = ''


    // Recebe o valor de ano do usuario e verifica se o valor é valido
    let ano = prompt('Qual é o ano que você quer verificar?')
    while (!isFinite(ano) || ano === '' || ano <= 0) {
        if (ano <= 0) {
            ano = prompt('Por favor digite um valor maior que 0:')
        } else {
            ano = prompt('Digite um valor válido:')
        }
    }
    ano = Number(ano)


    setTimeout(() => {
        // Retira a animacao de loading da tela e adiciona o resultado
        res.style.display = 'flex'
        document.getElementById('loading').style.display = 'none'

        if (ano % 400 == 0) {
            res.innerHTML = `<p>O ano de ${ano} <span class='bissexto'>É BISSEXTO</span> &#x2714</p>`
        } else if (ano % 4 == 0 && ano % 100 != 0) {
            res.innerHTML = `<p>O ano de ${ano} <span class='bissexto'>É BISSEXTO</span> &#x2714</p>`
        } else {
            res.innerHTML = `<p>O ano de ${ano} <span class='nao-bissexto'>NÃO É BISSEXTO</span>&#x274C;</p>`
        }
    }, 1800)

}
