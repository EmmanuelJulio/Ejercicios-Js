/* dibujar un cuadrado hueco con asteriscos*/

function lado(numero) {
  let lado = "";
  for (let i = 0; i < numero; i++) {
    lado += " * ";
  }
  return lado;
}
function cuadrado(numero) {
  let dibujo = lado(numero) + "\n";
  let contenido = "";
  for (i = 0; i < numero*3 - 2; i++) {
    contenido = "*";


    for (let x=0; x < (numero*3-2); x++) {
      contenido += " ";
    }


    contenido += "*";
    dibujo += contenido + "\n";
  }
  dibujo += lado(numero);
  return dibujo;
}
console.log(cuadrado(5));
