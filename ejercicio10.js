/*
Enunciado dado un numero mostrar una escaleras 
con escalones de [-] usando el numero para los niveles de la escalera
*/

function escalera(numero){
    const escalon = "[-]"
    for (let index = 0; index < numero; index++) {
        console.log(escalon.repeat(index+1)) 
    }

}
escalera(5)