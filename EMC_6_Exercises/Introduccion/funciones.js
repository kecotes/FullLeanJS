var funciones = [];

for ( var i=0; i<10; i++){
    //Estamos imprimiendo 10 funciones que imprimen la variable i
    //funciones.push( function(){ console.log(i)} );
    funciones.push(
        (function(valor){
            return function(){
                console.log(valor);
            }
        })(i)
    )
}   

funciones.forEach( function(func){
    func();
}); 

// Imprime 10 veces 10; porque i es una variable usada con var, y es compartida
// con todas las funciones.


// Solución con Let y EMSC6

var funciones = [];

for ( let i=0; i<10; i++){
    //Estamos imprimiendo 10 funciones que imprimen la variable i
    funciones.push( function(){ console.log(i)} );
}   

funciones.forEach( function(func){
    func();
});
