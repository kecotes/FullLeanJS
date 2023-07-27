
// Creo un Array de numeros
let numeros = [ 1,2,3,4,5,5,5,5,6,6,2];

// Lo convierto en un Set
// let setNumeros = new Set( numeros );

// console.log( setNumeros );

// convierto en Set en Array nuevamente
// let arrayNumeros = [...setNumeros];
// console.log( arrayNumeros );

let arrayNumeros = eliminaDuplicados( numeros );
console.log(arrayNumeros);

function eliminaDuplicados( items ){

    return [ ... new Set(items) ];

}