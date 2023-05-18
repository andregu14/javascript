function tabuada() {
    let n = document.getElementById('numero')
    let numero = (n.value)
    let res = document.querySelector('p#tabuada')
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')
    let caption = document.createElement('caption')
    
    if (numero == '') {
        alert('[ERRO] Digite um numero')
        res.innerHTML = "Digite um numero acima..."
    } else {
        for (let i = 1;i <= 10; i++) {
        let resul = numero * i
        res.innerHTML = ``
        tbody.innerHTML += `<tr><td class="n">${numero}</td><td>x</td><td class="e">${i}</td><td>=</td><td class="n">${resul}</td></tr>`
    }
    caption.innerHTML = `Tabuada do número ${numero}`
    res.appendChild(table)
    table.appendChild(tbody)
    table.appendChild(caption)
    }
}