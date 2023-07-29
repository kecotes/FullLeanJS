const fs = require('node:fs/promises');

// En vez de callbacks, vamos a utilizar promesas

console.log('Leyendo el primer archivo ...');
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer archivo: ', text);
    });


console.log('---> Estoy haciendo esto mientras se esta leyendo el archivo.txt');

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Leyendo el segundo archivo: ',text);
    })
console.log("---> Puedo seguir haciendo cositas mientras leo el archivo2.txt");
