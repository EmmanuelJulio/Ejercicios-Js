/*Dado un numero entero inviertelo y devuelve de nuevo el numero entero */

function InvvertirNums(numero) {
    let numeroString = numero.toString();
    let numeroInvertido=""
    for (let numero of numeroString) {
        numeroInvertido=numero+numeroInvertido;
    }
    return parseInt(numeroInvertido,10)
}
 console.log(InvvertirNums(-123456))
//// otra forma de hacer lo mismo

function invertir(numero2){
    let invertido = parseInt(numero2.toString().split('').reverse().join(''))*Math.sign(numero2);
    console.log(invertido)
    
}
invertir(-89)