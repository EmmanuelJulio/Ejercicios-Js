/* Dada una palabra, buscarla en una frase y devolver cuantes veces aparece en la frace */
const frase  ="Soy una frace que tiene muchas palabras ,las palabras son inportantes. amo las palabras"
const palabra= "palabras"
function CountPalabras(frase,palabra) {
    let textoLimpio=frase.toLowerCase().replace(/[!;',.()]/gi,"")
    let resultado = 0 ;
    if (textoLimpio.includes(palabra)){
        var palabras= textoLimpio.split(" ")
        console.log(palabras)
    }else{
        resultado=0;
    }
    return resultado;
}
CountPalabras(frase,palabra)