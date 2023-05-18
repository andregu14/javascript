
/*num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`A primeira posicao e ` + num[0])
for(let pos in num) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

*/

/*
let contador = 0
while (contador < num.length) {
    console.log(num[contador])
    contador++
}
for (let i = 0; i < num.length; i++) {
    console.log(`A posicao ${i} tem o valor ${num[i]}`)
}

*/
let num = [5, 2, 9, 3, 4]
let str = ['teste', 'numero', 'google', 'java', 'javascript']
num.push(8)
num.sort()

for (let i in str) {
    console.log(str[i])
}


let pos = num.indexOf(10)
if (pos == -1) {
    console.log('O valor digitado nao existe')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}
