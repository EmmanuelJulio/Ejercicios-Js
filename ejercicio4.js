function invertir(texto){
 let textoInvertido="";
 for (let letra of texto) {
     textoInvertido= letra+textoInvertido
 }
 console.log(textoInvertido)
}
invertir("pedro")