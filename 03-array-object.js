// Operaciones habituales con Arrays

// 1- Crear un array
var frutas = ['Manzana', 'Banana'];
frutas.length;

// 2- Acceder a un elemento del array mediante su índice
var primero = frutas[0];
var ultimo = frutas[frutas.length - 1];

// 3- Recorrer un array
for (var i = 0; i <= frutas.length; i++) {
  console.log(frutas[i]);
}
// Mejor Opción:
frutas.forEach(function (elemento, indice) {
  console.log(elemento, indice);
});

// 4- Añadir un elemento al final de un array
var nuevaLongitud = frutas.push('Naranja');

// 5- Eliminar el último elemento de un array
var ultimo = frutas.pop();

// 6- Añade un elemento al principio de un array
let nuevaLongitud = frutas.unshift('Frutilla');

// 7- Elimina el primer elemento de un array
let primero = frutas.shift();

// 8- Encontrar el índice de un elemento del array
frutas.push('Frutilla');
var posicion = frutas.indexOf('Banana');

// 9- Eliminar un único elemento mediante su posición
// Utilizaremos el método splice que recibe dos parámetros: la posición desde donde queremos eliminar y la cantidad de elementos que quermos eliminar
let elementoEliminado = frutas.splice(posicion, 1);

// 10- Eliminar varios elementos de un array
var vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria'];
var pos = 1,
  numElementos = 2;
var elementosEliminados = vegetales.splice(pos, numElementos);

// 11- Copiar un array
var copiaVegetales = vegetales.slice();

// Operaciones habituales con Objetos

// 1- Crear un objeto
// Los objetos en js son grupos de pares clave-valor y se usan para representar el mundo exterior
var empleado = {
  nombreApellido: 'Misael Peloc',
  cargo: 'Programador',
  sueldo: 1000,
  activo: true,
  habilidades: ['Sociable', 'Deportista'],
  conocerEstado() {
    if (this.activo) {
      console.log('El empleado ' + this.nombreApellido + ', está trabajando');
    } else {
      console.log('El empleado ' + this.nombreApellido + ', está jubilado');
    }
  },
};

// 2- Acceder a los valores de un objeto
empleado.conocerEstado();

// 3- Object.keys()
// Crea una matriz que contiene las claves de un objeto
var personal = {
  jefe: 'Misael',
  secretaria: 'Ruth',
  vendedor: 'Rodrigo',
  gerente: 'Rebeca',
};

var claves = Object.keys(personal);

// 4- Verificar la longitud de un objeto
var longitud = Object.keys(personal).length;

// 5- Object.values()
// Crea una matriz que contiene los valores de un objeto
var valores = Object.values(personal);
