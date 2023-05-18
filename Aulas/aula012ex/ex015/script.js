var agora = new Date()

function data() {
    var ano = agora.getFullYear() - 1
    var nasc = window.document.getElementById('nasc')
    nasc.max = ano
}


function verificar() {
    var ano = agora.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.querySelector('div#res')
    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verique os dados e tente novamente')
    } else {
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos </strong>`
    }
    
}