

// PROMSEAS: En un cine uno compra un voleto y se va hacer otra cosa, luego cuando regresa cuando es tiempo, entra al cine y todo bien 

// Este es un ejemplo de una tarea asincrona, aúnque el metodo tarea asincrona está escrito primero, se qedo en espera mientras se 
// cumplia el tiempo y se ejecuto el console log.
/* function tareaAsincrona(){

    setTimeout(function(){
        console.log("Proceso Asincrono terminado");
    },1300);

}

tareaAsincrona();

console.log("Código secuencial"); */

// ES6
function tareaAsincrona(){

    // La promesa espera dos argumento, el primero se ejecuta cuando todo funciona el segundo cuando falla
    let promesa = new Promise(   (resolve, reject) => {
        setTimeout(function(){
            console.log("Proceso Asincrono terminado");
            resolve();
        },1300);

    })

    return promesa;

}


// Como se regresa una promesa, si queremos ejecutar algo cuando termine la tarea se pone then, el then es practicamente resolve y reject
tareaAsincrona().then(  function(){ 
    console.log("Todo bien")
 }, 
 function(){ 
    console.error("Todo Mal")
});

console.log("Código secuencial");