function converter() {
    let resultado = document.getElementById('res')
    
    // Pede input para o usuario
    let numinput = prompt('Digite uma temperatura em ºC (Celsius)')
    
    // Converte input para number
    numinput = Number(numinput)

    // Valida input
    while (!isFinite(numinput) || numinput === '' ) {
        console.log('nao numero')
        console.clear()
    }
}