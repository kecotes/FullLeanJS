var saludo = "Hola Mundo!";

// --- Antiguo ---
// -1 confirmar si el string comienza por el caracter exacto
console.log(  saludo.substring(0,1) === 'h'  );

// -2 Encontrar un caracter, si no lo encuentra pone -1, si lo encuentra pone el numero
console.log(  saludo.indexOf("x"));

// --- Nuevo ---
// -1 Confirmar si el string comienza por esta letra o caracter
console.log(  saludo.startsWith('Hola') );
console.log(  saludo.endsWith('!') );

// 2- Encontrar un caracter y es booleano
console.log(  saludo.includes("x") );

// Comienza a buscar a partir de un caracter
console.log(  saludo.startsWith("Mu",5))

console.log(  saludo.includes('a', 5) );



