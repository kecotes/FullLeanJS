
let colores1 = [ "rojo", ["verde", "amarillo"], "morado", "naranja"];

let [ color1, [color2] ] = colores1;

console.log( color1, color2); 

let colores2 = ["rojo","morado","azul","Lila"];

let [ colorPrincipal, ...demasColores ] = colores2;

console.log( colorPrincipal );
console.log( demasColores)