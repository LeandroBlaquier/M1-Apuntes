/** Valores y tipos de variables
 *  Tipos principales (primitivos): string, number y boolean
 *  Tipo compuesto: Objeto y Matriz
 *  Tipo especiales: null y undefined
 *
 *  JavaScript utiliza un operador llamado typeof que sirve para saber de que tipo
 *  es una variable.
 * **/

var x;
typeof x;

y = 21;
typeof y;

m = undefined;
typeof m;

j = 'hola mundo';
typeof j;

k = true;
typeof k;

n = null;
typeof n;

// Tipo string
// Se puede utilizar cualquier valor (letras, digitos, signos de puntuación, etc)
var texto1 = 'hola mundo';
var texto2 = '"La base de datos';
var texto3 = '55';
var texto4 = 'c';

// Tipo number
// En js no se distingue entre los valores enteros y de punto flotante (internamente para js todos son puntos flotantes)
var numero1 = 1;
var numero2 = 1.23;

// Tipo boolean
// Este tipo de dato almacena 1 bit y puede ser true (verdadero) o false (falso). Son utilizados para registrar un estado
var estado1 = true;
var estado2 = false;

// Tipo object
// Un objeto es una colección de propiedades. JS esta diseñado en un paradigma basado a objetos.
var auto = {
  marca: 'Ford',
  year: 2014,
  usado: true,
};
// Podemos acceder a sus elementos con la notación de punto (.)
auto.marca;
auto.year;
auto.usado;
// Otra forma de acceder es con la notación de corchetes []
auto['marca'];
auto['year'];
auto['usado'];

// Tipo array
// Los arrays son objetos similares a una lista. Pueden aumentar en su longitud.
var frutas = ['Manzana', 'Banana'];
frutas.length;
// Acceder a una posición de un array
var elegida = frutas[1];

// Tipo undefined
// Este tipo de dato se utiliza cuando no sabemos el contenido de una variable o todavía no fue definido.
var x;
typeof x;

// Tipo null
// Una variable que contiene null no contiene ningún tipo de numero, cadena o valor booleano ni una matriz u objeto.
var vacio = null;
