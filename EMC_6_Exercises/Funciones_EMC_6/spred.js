//El operador spread permite especificar un arreglo que seŕa separado y cada item enviado será
// un argumento independiente a la función

// Solucion EMC5

var numeros = [1,5,10,20,25,30,35,50];

// Operador Math muestra el numero mayor
var max = Math.max.apply(  Math, numeros );

console.log( max );


// Solucion EMC5

let numeros = [1,5,10,20,25,30,35,50];

// Operador Math muestra el numero mayor
let max = Math.max(  ...numeros );

console.log( max );