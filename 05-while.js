/** El bucle while
 *  Cuando decimos bucle, nos referimos a una situación que se repite más de una vez
 *  Casi siempre en la programación estamos repitiendo acciones y para ello necesitamos los bucles
 *  El bucle while es una forma de repetir el mismo código varias veces
 *  **/

// 1- Sintáxis del bucle while (mientras)
// Ejemplo con bucle infinito (CODIGO FALLADO)
var counter = 0;
// while (counter < 50) {
// console.log(counter);
// }

// 2- Bucle while controlado (CODIGO CORRECTO)
while (counter < 50) {
  console.log(counter);
  counter = counter + 1;
}

// 3- Operadores aritméticos:
// Residuo (%): Devuelve el resto entero de una división
// Incremento (++): Suma 1 al valor.
// Decremento (--): Resta 1 al valor.

// 4- Bucle while controlado con operador aritmético
while (counter < 50) {
  console.log(counter);
  counter++;
}

// 5- Bucle do while
// En este caso el cuerpo del bucle se mueve para arriba y se agrega la palabra do (hacer)
// Siempre se ejecuta el bucle do al menos una vez
var counter2 = 60;

do {
  console.log(counter2);
  counter2++;
} while (counter2 < 50);
