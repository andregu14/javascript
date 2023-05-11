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
    numero.value = ''
    numero.focus()
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
    if (num.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let maior = num[0]
        let menor = num[0]
        for (let pos in num) {
            if (num[pos] > maior) {
                maior = num[pos]
            }
            if (num[pos] < menor) {
                menor = num[pos]
            }
        }
        p.innerHTML = ''
        p.innerHTML += `<p>Ao todo, temos ${num.length} numeros cadastrados.</p>`
        p.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        p.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        p.innerHTML += `<p>Somando todos os valores temos ${somararray()}</p>`
        p.innerHTML += `<p>A media dos valores digitados e ${media()}</p>`
        res.appendChild(p) 
    }
    
}
    