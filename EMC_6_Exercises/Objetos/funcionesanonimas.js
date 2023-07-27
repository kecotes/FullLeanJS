
var saludo1 = function(nombre){
    return "Hola " + nombre;
}("Fernando");

console.log(saludo1);

// Cuando se necesite crear funciones que se ejecuten automaticamente van los parentesis
var saludo2 = ( nombre => `Hola ${nombre}`)("Melisa");

console.log(saludo2)