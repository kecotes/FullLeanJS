
import { readFile } from 'node:fs/promises'; // y poner el archivo mjs para pasarlo a modulos
//const fs = require('node:fs/promises'); // commonJS


console.log('Leyendo el primer archivo ...');
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer archivo: ', text);

console.log('---> Estoy haciendo esto mientras se esta leyendo el archivo.txt');

console.log('Leyendo el segundo archivo ...')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log('Leyendo el segundo archivo: ',text2);

console.log("---> Puedo seguir haciendo cositas mientras leo el archivo2.txt");
