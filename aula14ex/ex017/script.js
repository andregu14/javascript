function tabuada() {
    var n = document.getElementById('numero')
    
    var numero = (n.value)
    var res = document.querySelector('p#tabuada')
    var table = document.createElement('table')
    var tbody = document.createElement('tbody')
    var caption = document.createElement('caption')
    caption.innerHTML = `Tabuada do número ${numero}`
    
    if (numero == '') {
        alert('[ERRO] digite um numero')
    } else {
        for (var i = 1;i <= 10; i++) {
        var resul = numero * i
        res.innerHTML = ``
        tbody.innerHTML += `<tr><td class="n">${numero}</td><td>x</td><td class="e">${i}</td><td>=</td><td class="n">${resul}</td></tr>`
    }
    res.appendChild(table)
    table.appendChild(tbody)
    table.appendChild(caption)
    }
}