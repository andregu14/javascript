function adequacao(x) { // Formata os numeros para str
    let a = x.toFixed(2).replace('.', ',')
    return a
}

function converteMedidas() {
    let res = document.getElementById('res')
    let res_calculo = document.getElementById('res_calculo')
    let table = res_calculo.querySelector('table')

    // If table element does not exist, create it
    if (!table) {
        table = document.createElement('table')
        res_calculo.appendChild(table)
    } else {
        // If table element exists, clear its contents
        table.innerHTML = ''
    }

    distancia = window.prompt('Digite uma distancia em metros (m)')
    while (distancia / 1 != Number(distancia) || distancia == '' || distancia == 0) {
        distancia = window.prompt('Digite um numero valido em metros (m)')
    }
    distancia = Number(distancia)

    res.innerHTML = `<h2>A distancia de ${adequacao(distancia)} metros, corresponde a...</h2>`

    let units = [
        {unit: 'quilometros (Km)', value: distancia / 1000},
        {unit: 'hectometros (Hm)', value: distancia / 100},
        {unit: 'decametros (Dam)', value: distancia / 10},
        {unit: 'decimetros (dm)', value: distancia * 10},
        {unit: 'centimetros (cm)', value: distancia * 100},
        {unit: 'milimetros (mm)', value: distancia * 1000}
    ]

    for (let i = 0; i < units.length; i++) {
        let row = table.insertRow()
        let cell1 = row.insertCell()
        let cell2 = row.insertCell()
        cell1.textContent = units[i].unit
        cell2.textContent = adequacao(units[i].value)
    }
}