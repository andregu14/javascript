function adequacao(x) { // Formata os numeros
    let a = x.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 3})
    return a
}

function converteMedidas() {
    let res = document.getElementById('res')
    let res_calculo = document.getElementById('res_calculo')
    let table = res_calculo.querySelector('table')

    // Se a tabela nao existir vai criar
    if (!table) {
        table = document.createElement('table')
        res_calculo.appendChild(table)
    } else {
        // If table element exists, clear its contents
        table.innerHTML = ''
    }
    // Pede para o usuario um input
    distancia = window.prompt('Digite uma distancia em metros (m)')

    // Valida input
    while (distancia / 1 != Number(distancia) || distancia === '' || distancia == 0 || distancia < 0) {
        distancia = window.prompt('Digite um numero valido em metros (m)')
    }

    // Converte input para number
    distancia = Number(distancia)

    res.innerHTML = `<h2>A distancia de ${adequacao(distancia)} metros, corresponde a...</h2>`

    let units = [ // Array com os valores para calculo
        {unit: 'quilometros (Km)', value: distancia / 1000},
        {unit: 'hectometros (Hm)', value: distancia / 100},
        {unit: 'decametros (Dam)', value: distancia / 10},
        {unit: 'decimetros (dm)', value: distancia * 10},
        {unit: 'centimetros (cm)', value: distancia * 100},
        {unit: 'milimetros (mm)', value: distancia * 1000}
    ]

    for (let i = 0; i < units.length; i++) { // Calcula valores com um for loop
        let row = table.insertRow()
        let cell1 = row.insertCell()
        let cell2 = row.insertCell()
        cell1.textContent = units[i].unit
        cell2.textContent = adequacao(units[i].value)
    }
}