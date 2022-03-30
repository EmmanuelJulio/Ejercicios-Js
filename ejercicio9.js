/* dados dos array devbolver solo los elementos comunes en los dos arrays */

/*ElementosComunes() */

/// mi solucion
const array1 = [1,2,3,4,5];
const array2 = [2,3,6,7,12];

function ElementosComunes(array1,array2){
    let arrayResultado =[]
    array1.forEach(element1 => {
        array2.forEach(element2=>{
            if(element1 === element2){
                arrayResultado.push(element1)
            }
        })
    });
    console.log(arrayResultado);
}

ElementosComunes(array1,array2);

function ElementosComunesProf(array1){
    const filtrado = array1.filter(elemento =>{
        array2.includes(elemento)
    })
    console.log(filtrado)
}
ElementosComunes(array1,array2)