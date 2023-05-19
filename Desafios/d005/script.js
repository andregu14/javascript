function adequacao(x) {
    let a = x.toFixed(2).replace('.', ',')
    return a
}

function converteMedidas() {
    let res = document.getElementById('res')
    let p = document.createElement('p')
    let res_calculo = document.getElementById('res_calculo')
    p.innerHTML = ''
    res_calculo.appendChild(p)
    
    distancia = window.prompt('Digite uma distancia em metros (m)')
    while (distancia / 1 != Number(distancia) || distancia == '') {
        distancia = window.prompt('Digite uma distancia em metros (m)')
    }
    distancia = Number(distancia)


    res.innerHTML = `<h2>A distancia de ${adequacao(distancia)} metros, corresponde a...</h2>`
    
    p.setAttribute('id', 'num')
    p.innerHTML += `${adequacao(distancia / 1000)} quilometros (Km) <br>`
    p.innerHTML += `${adequacao(distancia / 100)} hectometros (Hm) <br>`
    p.innerHTML += `${adequacao(distancia / 10)} decametros (Dam) <br>`
    p.innerHTML += `${adequacao(distancia * 10)} decimetros (dm) <br>`
    p.innerHTML += `${adequacao(distancia * 100)} centimetros (cm) <br>`
    p.innerHTML += `${adequacao(distancia * 1000)} milimetros (mm) <br>`
    res_calculo.appendChild(p)
}