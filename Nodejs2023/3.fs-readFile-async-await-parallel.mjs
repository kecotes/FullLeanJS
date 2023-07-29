
import { readFile } from 'node:fs/promises'; // y poner el archivo mjs para pasarlo a modulos
//const fs = require('node:fs/promises'); // commonJS

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer archivo: ', text);
    console.log('Leyendo el segundo archivo: ',secondText);
})

// Lo bueno: Esto es mas rapido ya que estamos haciendo dos trabajos en paralelo, en los anteriores estamos leyendo en secuencial de forma asincrona
// aqui estamos diciendo, oye vas a leer los dos archivos y cuando termines me muestras el resultado