// Este mensaje está en el scope global
let mensaje = "1233";

if ( true ){
    //El Scope crea la variable mensaje solamente dentro de esta función
    //Esta variable declarada con let agarra un espacio de memoria para ella sola y es diferente a la del global
    let mensaje = "que tal?";
    console.log(mensaje);
}

console.log(mensaje); 

// ----------- Variables const ---------

// Nunca cambian de valor y es buena practica tenerlas todas en mninuscula
// Tienen que inicializarse en el momento que son definidas
const IMPUESTO_SV = 15.00;

// Objeto persona
const PERSONA = {
    nombre : "Juan",
    apellido: "Perez"
}

console.log( PERSONA.nombre );
console.log( IMPUESTO_SV );

// ------------ Variables for ------------
/* 
for( let i = 0; i <= 10; i++ ){
    //
    //
    console.log(i);
}

console.log(i); */