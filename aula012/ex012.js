var agora = new Date()
var hora = agora.getHours()

console.log(`Agora sao exatamente ${hora} horas.`)
if (hora >= 6 && hora <= 11) {
    console.log('Bom Dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora >= 0 && hora <= 5) {
    console.log('Boa Madrugada!')
} else {
    console.log('Boa Noite!')
}