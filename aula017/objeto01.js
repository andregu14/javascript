//  Estudando Objetos
 
 let amigo = {
   nome: 'Jose', 
   sexo: '',
   peso: 85.4,
   engordar(p=0){
      console.log('Engordou')
      this.peso += p
   } }
 amigo.engordar(2)
 amigo.nome = 'Andre'
 amigo.sexo = 'm'

 if (amigo.sexo == 'M' || amigo.sexo == 'm') {
   amigo.sexo = 'masculino'
 } else {
   amigo.sexo = 'feminino'
 }

 console.log(`${amigo.nome} do sexo ${amigo.sexo} pesa ${amigo.peso}Kg`)

