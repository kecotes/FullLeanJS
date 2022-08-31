// ==  Igualdad
// === Mismo tipo y mismo valor
// NaN Not a Number

// Matematicamente ambos son true pero computacionalmente tienen propiedas distintas
console.log( +0 == -0);
console.log( +0 === -0);
// Para evaluar en caso queramos una comparación bien minuciosa
console.log( Object.is( +0, -0));

console.log("----");

console.log( NaN == NaN);
console.log( NaN === NaN);
console.log( Object.is(NaN, NaN));

console.log("----");

console.log( 5 === 5);
console.log( 5 === "5");

console.log("---- 5 contra 5 ");

console.log( Object.is(5, 5));
console.log( Object.is(5, "5"));