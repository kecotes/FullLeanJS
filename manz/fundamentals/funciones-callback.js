function works() {
    console.log('Una funcion clasica');
}
// Ahora el nombre de la función pasa a ser el nombre de la variable, mientras que el nombre de la 
// función desaparece y se omite, dando paso a lo que se llaman las funciones anónimas (o funciones lambda).
// Por esto es que son funciones anonimas () => { } :OOOO
const saludar = function saludo(kev = 'kevin') {
    return console.log('hola '+kev);
}

saludar();
// saludo(); //saludo is not defined

works();

// ************ CallBack ****************
// A grandes rasgos, un callback (llamada hacia atrás) es pasar una función B por parámetro a una función A, de modo que 
// la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función

// Esto nos podría permitir crear varias funciones para utilizar a modo de callback

// fB = Función b (callback)
const fB = function () {
    console.log("Función B ejecutada.");
};

//fError =función Error (Callback)
const fError = function () {
    console.error('erro');
};

// fA = Función A
const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    (n > 2) ? callback() : callbackError();
};

//fA(fB,fError);

//Está forma utilizada si no deseamos crear variables que contengan callbacks
fA(
    function(){
        console.log("Función B Ejecutada.")
    },
    function() {
        console.error("Error")
    } );