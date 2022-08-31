var miFuncion2 = function(valor){
    return valor;
}

let miFuncion1 = valor => valor;

console.log(miFuncion2("deivid") );
console.log( miFuncion2("deivis") );

var sumar2 = function(num1, num2){
    return num1 + num2;
}

let sumar1 = (num1, num2) => num1 + num2;

console.log( sumar2(4,5) );
console.log( sumar1(6,6) );

var saludar2 = function(){
    return "Hello Wolrd";
}

let saludar1 = () => "Hola World";

console.log( saludar2() );
console.log( saludar1() );





var saludarPersona2 = function(nombre){
    var salida = "Hola, " + nombre;

    return salida;
}

let saludarPersona1 = nombre => {
    let salida = `Hola, ${nombre}`;

    return salida;
}

console.log(saludarPersona2("Kevin"));
console.log( saludarPersona1("Kelvin"));




// Esta función regresa un nombre literal
var obtenerLibro2 = function(id){
    return {
        id: idi,
        nombre: "Piense y hagase rico"
    }
}

// No se podia poner de una vez corchetes por que pensaba que era el cuerpo de la función
// Y se necesitaba era retornar, por eso primero el parentesis;
let obtenerLibro1 = id => ({ id:id, nombre: "Piense y hagase rico"});

console.log(obtenerLibro2(2));
console.log(obtenerLibro1(2));