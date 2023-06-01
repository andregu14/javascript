function calcularBhaskara () {
    document.getElementById('loading').style.display = 'block'
    const res = document.getElementById('res')
    res.style.display = 'none'

    // Funcao que verifica se um numero e valido e transforma ele em numero
    function isNumber(valor) {
        if (!isFinite(valor) || !valor > 0 || valor === '') {
            return false
        } else {
            valor = Number(valor)
            return true
        }
    }

    // Recebe o valor de a do usuario e verifica se e valido
    let valor_a = prompt('Qual é o valor de a?')

    while (isNumber(valor_a) == false || valor_a === null) {
        valor_a = prompt('Digite um valor válido:')
    }
    console.log('valor de a=', valor_a)

    // Recebe o valor de b do usuario e verifica se e valido
    let valor_b = prompt('Qual é o valor de b?')
    
    while (isNumber(valor_b) == false || valor_b === null) {
        valor_b = prompt('Digite um valor válido:')
    }

    // Recebe o valor de c do usuario e verifica se e valido
    let valor_c = prompt('Qual é o valor de c?')

    while (isNumber(valor_c) === false || valor_c === null) {
        valor_c = prompt('Digite um valor válido:')
    }

    // Valor de delta

    let valor_delta = valor_b * valor_b - 4 * valor_a * valor_c


    setTimeout(() => {
        res.style.display = 'flex'
        document.getElementById('loading').style.display = 'none'
        
        // Mostra resultado na tela
        res.innerHTML = ''
        res.innerHTML += `<h2>Resolvendo Bhaskara</h2>`
        res.innerHTML += `<p>A equação atual é ${valor_a}x<sup>2</sup> + ${valor_b}x + ${valor_c} = 0</p>`
        res.innerHTML += `<p>O cálculo realizado será Δ = ${valor_b}<sup>2</sup> - 4 . ${valor_a} . ${valor_c}</p>`
        res.innerHTML += `<p>O valor calculado foi <span id="resultado">Δ = ${valor_delta}</span></p>`
    }, 1500)

    

}