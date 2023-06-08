function situacaoAluno() {
    // Mostra a animacao de loading na tela
    document.getElementById('loading').style.display = 'block'
    const res = document.getElementById('res')
    res.innerHTML = ''
    res.style.display = 'none'
    document.getElementById('botao').setAttribute("disabled", "true")

    // Recebe o nome do aluno e verifica se e um valor valido
    let nome_aluno_nao_formatado = prompt('Qual é o nome do aluno?')
    while (nome_aluno_nao_formatado == '') {
        nome_aluno_nao_formatado = prompt('Digite o nome do aluno!')
    }

    // Transforma o nome do aluno para que as primeiras letras sejam sempre maiusculas
    let nome_aluno = nome_aluno_nao_formatado.replace(/\b\w/g, function(l) { return l.toUpperCase(); });

    // Recebe a primeira nota do aluno e verifica se e um valor valido
    let nota1 = prompt(`Primeira nota de ${nome_aluno}:`)
    while (!isFinite(nota1) || nota1 == '') {
        !isFinite(nota1) ? nota1 = prompt('Digite um valor numerico para nota:') : nota1 = prompt('Informe a primeira nota do aluno:')
    }
    nota1 = Number(nota1)

    // Recebe a segunda nota do aluno e verifica se e um valor valido
    let nota2 = prompt(`Segunda nota de ${nome_aluno}:`)
    while (!isFinite(nota2) || nota2 == '') {
        !isFinite(nota2) ? nota2 = prompt('Digite um valor numerico para nota:') : nota2 = prompt('Informe a segunda nota do aluno:')
    }
    nota2 = Number(nota2)


    // Calcula media e define o resultado
    let media_aluno = (nota1 + nota2) / 2
    let situacao_aluno
    if (media_aluno > 6) {
        situacao_aluno = `<span id='aprovado'>APROVADO</span>`
    } else if (media_aluno >= 3 && media_aluno <= 6) {
        situacao_aluno = `em <span id='recuperacao'>RECUPERAÇÃO</span>`
    } else {
        situacao_aluno = `<span id='reprovado'>REPROVADO</span>`
    }

    setTimeout(() => {
        // Termina a animacao de loading e adiciona o resultado na tela
        document.getElementById('loading').style.display = 'none'
        res.innerHTML = ''
        res.style.display = 'flex'
        document.getElementById('botao').removeAttribute("disabled")

        res.innerHTML += `<h2>Analisando a situação de ${nome_aluno}</h2>`
        res.innerHTML += `<p>Com as notas ${nota1.toFixed(2).replace('.', ',')} e ${nota2.toFixed(2).replace('.', ',')}, a <strong>média é ${media_aluno.toFixed(2).replace('.', ',')}</strong></p>`
        res.innerHTML +=  `<p>Com média ${media_aluno > 6 ? 'acima de 6,0' : (media_aluno < 3 ? 'abaixo de 3,0' : 'entre 3,0 e 6,0')}, o aluno está ${situacao_aluno}</p>`
    }, 1800)
}