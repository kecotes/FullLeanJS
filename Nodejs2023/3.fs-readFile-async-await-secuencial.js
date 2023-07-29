
const { readFile } = require('node:fs/promises'); // commonJS

// CommonJs no tiene soporte para Async-Await pero esto es una forma de pasarlo 

// Funcion auto-invocada: la funcion son los primeros parentesis dentro esta lo que hace, y luego los parentesis al final simbolizan que se invoca enseguida
// IIFE - Inmediatly Invoked Function Expresion
(
    async () => {
        console.log('Leyendo el primer archivo ...');
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer archivo: ', text);

        console.log('---> Estoy haciendo esto mientras se esta leyendo el archivo.txt');

        console.log('Leyendo el segundo archivo ...')
        const text2 = await readFile('./archivo2.txt', 'utf-8')
        console.log('Leyendo el segundo archivo: ',text2);

        console.log("---> Puedo seguir haciendo cositas mientras leo el archivo2.txt");
    }
)();

// En el resultado parece que Async-Await esta bloqueando pero lo que esta haciendo es una asincronia secuencial
// Si esta liberando los recursos del sistema y se queda esperando, pero aun asi no continua hasta que termine esa promesa
// Tenemos 1) Sincrono 2) Asincrono Secuencial 3) Asincrono en paralelo