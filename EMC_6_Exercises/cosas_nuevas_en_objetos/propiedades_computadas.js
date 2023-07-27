var persona = {};

var apellido = "apellido";

persona.apellido = "Cotes"; //Output: Cotes
persona["Primer Nombre"] = "Kevin"; //Procesarlo en el momento. output: Kevin
persona[apellido] = "Cotes" //Output: Cotes
//persona[apellido]

//console.log(persona);


// EMC6

var apellido = "Primer Apellido";

// Objeto literal
var persona = {
    "Primer Nombre": "Kevin",
    [ apellido ] : "Cotes"
};

console.log( persona["Primer Nombre"]);
console.log(persona[apellido]);

var subFijo = " nombre";

var persona = {
    ["primer" + subFijo] : "Jose",
    ["segundo" + subFijo] : "Gamez"
};

console.log( persona["primer nombre"]);
console.log( persona["segundo" + subFijo ]);
