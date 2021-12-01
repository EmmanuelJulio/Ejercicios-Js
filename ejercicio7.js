/* dados dos numeros devolver cuantos numeros impares hay entre ellos */
/*ejemplo impares(1,100 ) //debuelve 49 */
function impares(desde ,hasta){
    let contador=0;
    while(desde<hasta){
        if(desde%2!==0) contador++;
        
        desde++;
        
    }
    return contador;
}

console.log(impares(1,100))