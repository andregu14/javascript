function adequacaoBRL(x) { // Formata os numeros para BRL
    const a = x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return a
}

function reajustarSalario () {
    const res = document.getElementById('res')

    // Usuario insere o nome
    let nome_funcionario = prompt('Qual é o nome do funcionário?')

    // Usuario insere o valor do salario
    let salario = prompt(`Qual é o salário de ${nome_funcionario}?`)
    
    // Validacao do valor de salario
    while (!isFinite(salario) || salario === '') {
        salario = prompt('Digite um valor válido')
    }
    
    // Transforma o numero
    salario = Number(salario)

    // Usuario insere o valor da porcentagem para aumento
    let reajuste_porcentagem = prompt(`O salário de ${nome_funcionario} vai ser reajustado em qual porcentagem?`)

    // Validacao do valor de reajuste_porcentagem
    while (!isFinite(reajuste_porcentagem) || reajuste_porcentagem === '') {
        reajuste_porcentagem = prompt('Digite um valor válido')
    }

    // Transforma o numero
    reajuste_porcentagem = Number(reajuste_porcentagem)

    // Calcula o reajuste
    let valor_aumento = (salario / 100) * reajuste_porcentagem

    // Mostra o resultado na tela
    res.innerHTML = ''
    res.innerHTML += `<h2>${nome_funcionario} recebeu um aumento salarial!</h2>` 
    res.innerHTML += `<p>O salário atual era ${adequacaoBRL(salario)}.</p>` 
    res.innerHTML += `<p>Com um aumento de ${reajuste_porcentagem}%, o salário vai aumentar ${adequacaoBRL(valor_aumento)} no próximo mês.</p>` 
    res.innerHTML += `<p>E a partir daí, ${nome_funcionario} vai passar a ganhar ${adequacaoBRL(salario + valor_aumento)}.</p>` 
}