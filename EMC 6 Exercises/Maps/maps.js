let mapa = new Map();

//insertanto datos
mapa.set("nombre","Kev");
mapa.set("edad",27);
mapa.set("apellido");
mapa.set({},{hola: "hola mundo"});

console.log(mapa); // Array Map
console.log(mapa.size); // 4

console.log( mapa.get( "nombre" )); //Kev
console.log( mapa.has( "nombre" )); //true

// Borrar Key
mapa.delete( "nombre")
console.log( mapa.has( "nombre"));

//Borrar Value
mapa.set("edad");
console.log(mapa);

// Borrar todo el mapa
mapa.clear();
console.log(mapa);


// Para inicializar un mapa con valores por defecto, se debe mandar un arreglo que contenta los arreglos de los datos
console.log("-------------------------")
let map = new Map( [ ["nombre", "Kev"],["edad", "27"] ] );
console.log(map);

// ForEach de los maps
console.log("-------------forEach------------")
let map2 = new Map( [ ["nombre","Adela"],["edad","24"] ]);

/*
    Con forEach
map2.forEach( function( valor, llave, mapOrigen ){
    console.log(`Llave: ${llave} Valor: ${valor}`);
    console.log(mapOrigen);
});
*/

// Con Arrow Function
// Las funciones de flecha cuando reciben varios parametros van en parentesis
// NO hay necesidad de llaves si es una sola linea 
map2.forEach( (valor, llave, mapOrigin) =>{
    console.log(`Llave: ${llave} Valor: ${valor}`);
    console.log(mapOrigin)
});