//La funcion va a recibir como primer argumento un arreglo, luego unos alumnos y retornaremos argument 0
// Toda función aunque no se vea, recibe parametros por arguments como está
console.log("---Solución con EMC5---")
function agregar_alumno(){
    console.log( arguments );

    // EL primer argumento será un arreglo de alumnos, tenemos que ignorar este y trabajar con los demás
    for( var i=1; i<arguments.length; i++){
        arguments[0].push( arguments[i]);
    }

    return arguments[0];
}


var alumnos_arr = ["Fernando"];

var alumnos_arr2 = agregar_alumno( alumnos_arr, "Maria", "Pedro", "Susana", "David");

console.log( alumnos_arr2);

// ----------- Haciendolo en EMC6 ----------


// El primer parametro siempre es obligatorio, los demás opcionales
// EL parametro rest (...) Simboliza cualquier cantidad de alumnos que entran al metodo 
// Solo puede existir una parametro REST en una función
// El parámetro rest debe ir siempre como último parámetro 
console.log("Solución con EMC6")
function agregar_alumno( arr_alumnos6, ...alumnos){
    console.log( arguments );

    // EL primer argumento será un arreglo de alumnos, tenemos que ignorar este y trabajar con los demás
    for( let i=0; i < alumnos.length; i++){
        arr_alumnos6.push( alumnos[i]);
    }

    return arr_alumnos6;
}


let alumnos_arr6 = ["Fernando"];

let alumnos_arr26 = agregar_alumno( alumnos_arr6, "Maria", "Pedro", "Susana", "David");

console.log( alumnos_arr26);
