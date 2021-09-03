/** El condicional if else
 *  Permite controlar que ocurrirá de acuerdo a: el valor de una o más variables.
 *  Estas variables pueden ser respecto al cálculo de un valor, a un valor definido
 *  o una variable booleana.
 *  La cláusula else no es obligatoria. Sirve para indicar instrucciones a realizar
 *  en caso de no cumplirse la condición.
 * **/

// Operadores de comparación
// 1- Operador de igualdad
var valor1 = 5;
var valor2 = '5';

if (valor1 == valor2) {
  console.log('Son iguales');
} else {
  console.log('Son distintas');
}

// 2- Operador de igualdad estricta
var valor3 = 3.14;
var valor4 = '3.14';

if (valor3 === valor4) {
  console.log('Son estríctamente iguales');
} else {
  console.log('Son distintas');
}

// 3- Operador de desigualdad
var valor5 = 123;
var valor6 = '456';

if (valor5 != valor6) {
  console.log('Son distintas');
} else {
  console.log('Son iguales');
}

// 4- Operador de desigualdad estricta
var valor7 = 123;
var valor8 = 123;

if (valor7 !== valor8) {
  console.log('Son estríctamente distintas');
} else {
  console.log('Son iguales');
}

// 5- Operador mayor que
var persona1 = 45;
var persona2 = 35;

if (persona1 > persona2) {
  console.log('La persona 1 es mayor');
} else {
  console.log('La persona 1 no es mayor');
}

// 6- Operador mayor o igual que
var pedro = 17;
var marcos = 17;

if (pedro >= marcos) {
  console.log('Pedro es mayor o igual a Marcos');
} else {
  console.log('Marcos es mayor a Pedro');
}

// 7- Operador menor que
var quico = 8;
var jaimito = 65;

if (quico < jaimito) {
  console.log('Quico es el menor');
} else {
  console.log('Quico no es el menor');
}

// 8- Operador menor o igual que
var kiko = 9;
var chavo = 8;

if (kiko <= chavo) {
  console.log('Kiko es menor o igual que Chavo');
} else {
  console.log('Kiko no es menor o igual que Chavo');
}

// 9- Usando los booleanos (true y false)
var estado1 = true;

if (estado1) {
  console.log('El estado es verdadero');
} else {
  console.log('El estado es falso');
}

// 10- Usando el operador de negación lógica
if (!estado1) {
  console.log('El estado es verdadero');
} else {
  console.log('El estado es falso');
}

// 11- Usando el operador de doble negación lógica (y más...)
if (!!estado1) {
  console.log('El estado es verdadero');
} else {
  console.log('El estado es falso');
}

// 12- Uso del else if: de esta manera puedo anidar múltiples condiciones
var clima = 'soleado';
var temperatura = 45;

if (clima === 'soleado') {
  if (temperatura < 30) {
    console.log('Tranqui no hace mucho calor...');
  } else if (temperatura >= 40) {
    console.log('¡Está insoportable!');
  }
}

// 13- Operadores Lógicos: AND, OR y NOT
// Los utilizamos cuando queremos evitar usar múltiples condiciones if
// Operador && (AND): lo usamos para encadenar dos o más expresiones y todas ellas tienen que ser true
// Operador || (OR): lo usamos para encadenar dos o más expresiones y alguna de ellas tienen que ser true
// Operador ! (NOT): lo usamos para negar una expresión. Revisar el punto 10 y 11
if (clima === 'soleado' && temperatura < 30) {
  console.log('Tranqui no hace mucho calor...');
} else if (clima === 'soleado' && temperatura >= 40) {
  console.log('¡Está insoportable!');
}

// Ejemplo con el operador OR
var caraLinda = false;
var nivelInteligencia = 115;

if (caraLinda || nivelInteligencia > 110) {
  console.log('Podes ser un gran programador');
}

// 14- Combinando operadores AND y OR
var sexo = 'masculino';

if ((caraLinda || nivelInteligencia > 110) && sexo === 'masculinos') {
  console.log('Podes ser un gran programador');
} else {
  console.log('Podes ser una gran programadora');
}

// 15- Operador Ternario: es una forma resumida de usar un if
var bootcampCursado = true;
var soyProgramador = bootcampCursado
  ? '¡¡SI!! ¡Lo logré! :)'
  : 'No... será para la próxima :(';

console.log('¿Y ya sabés programar? \n', soyProgramador);

// INVESTIGAR EL CONDICIONAL SWITCH
