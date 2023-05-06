function contar() {
    var ini = document.getElementById('inicio')
    var inicio = Number(ini.value)
    var fm = document.querySelector('input#fim')
    var fim = Number(fm.value)
    var pas = document.querySelector('input#passo')
    var passo = Number(pas.value)
    var res = document.getElementById('res')
    var p = document.createElement('p')
    p.innerHTML = ``
    if (inicio > fim || inicio == '' || fim == '') {
        window.alert(`[ERRO] verifique os dados e tente novamente`)
    } else if (passo == 0 || passo > fim) {
        alert('[ERRO]Passo invalido, sera considerado passo 1')
        passo = 1
    } 
    if (passo >= 1 && inicio <= fim) {
        res.innerHTML = `Contando de ${inicio} ate ${fim}, de ${passo} em ${passo}: <br>`
        for (inicio;inicio <= fim;inicio += passo) {
            p.innerHTML += `${inicio}&#x1F449`
        }
        p.innerHTML += 'Fim &#x1F3C1'
        res.appendChild(p)
        
    }
}
        
            
