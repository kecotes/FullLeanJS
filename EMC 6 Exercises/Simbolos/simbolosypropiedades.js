
// Los simbolos son perfectos para poner nombres de propiedas que no van a colisionar con nombres
// de propiedas que estan en otras librerias o inclusibe en el mismo codigo 
let primerNombre = Symbol('opcional');
let segundoNombre = Symbol();

let persona = {
    [segundoNombre]: 'Cortes'
};

persona[primerNombre] = 'Kev';

console.log( persona[primerNombre] );
console.log( persona[segundoNombre] );
console.log( primerNombre );

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log( simbolo1 == simbolo2 );
console.log( simbolo1 === simbolo2 );
console.log( Object.is(simbolo1, simbolo2) );

console.log(typeof(primerNombre));

console.log(" -------------------- ");

let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "1234";

console.log( objeto[userID] );
console.log( userID );


let userID2 = Symbol.for("userID");

console.log( userID == userID2 );
console.log( userID === userID2 );
console.log( Object.is(userID, userID2) );

console.log( objeto[userID2]);
console.log( userID2 );

let id = Symbol.for("id unico");
console.log( Symbol.keyFor( id ));