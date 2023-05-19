function adequacao(x) { // Formata os numeros para str
    let a = x.toFixed(2).replace('.', ',')
    return a
}

function converteMedidas() { // Recebe e converte os valores do input do usuario
    let res = document.getElementById('res')
    let res_calculo = document.getElementById('res_calculo')
    let p = document.createElement('p')
    
    

    
    distancia = window.prompt('Digite uma distancia em metros (m)')
    while (distancia / 1 != Number(distancia) || distancia == '' || distancia == 0) {
        distancia = window.prompt('Digite um numero valido em metros (m)')
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