// Función que manda un saludo al cierto tiempo
//Los parametros opcionales (ej. timeout) es recomendable ponerlos al final
function saludo( mensaje = "Hola Mundo", timeout=1500 ){
    
    //mensaje = mensaje || "Hola mundo";
    // Si el Mensaje es diferente de undefined muestra mensaje, si no Hola Mundo
    //mensaje = ( typeof mensaje !== "undefined" )? mensaje : "Hola mundo2";

    setTimeout(function() {
        console.log( mensaje );
    }, timeout);
}

saludo();


// Ejemplo con objeto

// Muestra el saludo por que la función está definida en los parametros
// Si no, no mostrara nada
function saludar( fn = fnTemporal, persona = { nombre: "Kevin"} ){

    console.log( typeof fn );

    if( typeof fn === "undefined"){
        console.log('NO es una funcion');
        return;
    }
    fn();

    console.log( persona)

}

function fnTemporal(){
    console.log("Hola mundo FN");
}

var persona = {
    nombre: "suaza",
}

saludar(fnTemporal, persona);