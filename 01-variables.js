/** Reglas para las variables y constantes
 *  Las variables pueden contener letras (a-z), números (0-9), el símbolo de peso ($) y underscores (_)
 *  No puede iniciar su nombre con un número
 *  No puede ser una palabra reservada
 *  Los nombres son case sensitive
 * **/

// Declarando e inicializando una variable.
var a = 0;
// Declarando e inicializando dos variables.
var b = 0;
c = 0;
// Declarando una variable con el mismo nombre.
var b = 50;
// Reasignando el valor de una variable.
a = 10;
// Declarando e inicializando una constante.
const x = 0;
// Reasignado el valor a una constante (ERROR).
x = 10;
// Declarando una const con el mismo nombre (ERROR).
const x = 20;

// Probar con console.log();.
