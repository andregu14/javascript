function adequacao(x) { // Formata os numeros
    let a = x.toLocaleString('pt-BR', {minimumFractionDigits: 1, maximumFractionDigits: 2})
    return a
}

function converter() {
    let resultado = document.getElementById('res')
    
    // Pede input para o usuario
    let celsius = prompt('Digite uma temperatura em ºC (Celsius)')
    
    // Valida input
    while (!isFinite(celsius) || celsius === '' ) {
        celsius = prompt('Digite uma temperatura valida em ºC (Celsius)')
    }
    // Converte input para number
    celsius = Number(celsius)

    // Faz a conversão
    let fahrenheit = (celsius * (9/5)) + 32
    let kelvin = celsius + 273.15

    // Adiciona o resultado na tela
    resultado.innerText = ''
    resultado.innerHTML = `${adequacao(celsius)} graus celsius equivalem a:<br>
    ${adequacao(fahrenheit)} fahrenheit<br>
    ${adequacao(kelvin)} kelvin`
}

