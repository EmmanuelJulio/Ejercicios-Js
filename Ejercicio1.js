/* dado un numero ,devovlver su tabla de multiplicar completa*/

function multiplicate(number){
   for (let index = 1; index < 11; index++) {
       console.log(number +' x '+ index + ' = ' +index*number)
       
   }
}
multiplicate(2)

//// resuelta por el tipo

function tablaMultiplicar(numero) {
    let resultado = `#Tabla del ${numero} #`
    for (let i = 0; i <= 10; i++) {
        let multiplicacion =(i*numero)
        console.log(multiplicacion)
    }
}
tablaMultiplicar(5)