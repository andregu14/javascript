let numero = document.getElementById('num')
let res = document.getElementById('res1')
let p = document.createElement('p')
var num = []

function adicionar() {
    let teste = Number(numero.value)
    if (teste >= 1 && teste <=100 && num.indexOf(teste) == -1) {
        num.push(teste)
        let select = document.getElementById('res')
        let res = document.createElement('option')
        res.innerHTML = `Valor ${num[num.length -1]} adicionado.`
        select.appendChild(res)
        p.innerHTML = ''
    } else {
        alert('Valor invalido')
    }
}

function maiorvalor(n) {
    n.sort()
    return n[n.length -1]
}

function menorvalor(n) {
    n.sort()
    return n[0]
}

function somararray() {
    let soma = 0
    for (let pos in num) {
        soma += num[pos]
    }
    return soma
}

function media() {
    let soma = somararray()
    let media = soma / (num.length)
    return media
}

function finalizar() {
    p.innerHTML = ''
    p.innerHTML += `<p>Ao todo, temos ${num.length} numeros cadastrados.</p>`
    p.innerHTML += `<p>O maior valor informado foi ${maiorvalor(num)}.</p>`
    p.innerHTML += `<p>O menor valor informado foi ${menorvalor(num)}.</p>`
    p.innerHTML += `<p>Somando todos os valores temos ${somararray()}</p>`
    p.innerHTML += `<p>A media dos valores digitados e ${media()}</p>`
    res.appendChild(p) 
}
    