/** El bucle: for
 *  Es más complejo que el bucle while, pero es el más utilizado.
 *  Crea un bucle que consiste en tres expresiones opcionales, encerradas en
 *  paréntesis y separadas por puntos y comas, seguidas de una sentencia
 *  ejecutada en un bucle.
 *  **/

// 1- Estructura del bucle for
// for (begin; condition; step) { // (comienzo, condición, paso)
//  cuerpo del bucle
// }

// 2- Descripción de las partes
for (var i = 0; i < 3; i++) {
  console.log(i);
}
// Parte ---------- Ejemplo ------------ Detalle
// comienzo  | var i = 0;      | Se ejecuta una vez al comienzo del bucle
// condicion | i < 3;          | Comprobada antes de cada iteración del bucle. Si es falsa, el bucle finaliza
// cuerpo    | console.log(i); | Se ejecuta una y otra vez mientras la condición sea verdadera.
// paso      | i++;            | Se ejecuta después del cuerpo en cada iteración

// INVESTIGAR LAS SENTENCIAS BREAK Y CONTINUE
