const fs = require('node:fs')

// --- Codigo Sincrono ---
// Va de forma secuencial de forma asincrona...La Sincronia bloquea el codigo que le precede, se queda esperando a ejecutarlo y luego el siguiente...

// Esto devolververia un buffer, informacion en bytes. con la codificacion utf-8 le decimos que lo entregue en formato leeible en espaniol
/* console.log('Leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

console.log('La asincronia no deja hacer cosas mientras por ejemplo, leo el archivo.txt')

console.log('Leyendo el segundo archivo ...')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2) */

// --- Codigo Asincrono ---
// Al ser asincrono se necesita un tipo de mecanismo que asegure que una vez que se leido el archivo, se ejecute el codigo que queremos, sincronamente 
// no se puede. Para hacer esto se utiliza un mecanismo que se llama callbacks, los callbacks son funciones que se ejecutan cuando una tarea ha terminado
console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    // Oye quiero que leas este archivo, lo codigiques a utf8 y cuando termines de leer lo muestres, pero mientras puedes ejecutar las lineas de alla abajo
    // fuera de este callback, tu tranquilo lee esto.
    console.log('primer archivo: ',text);
})


console.log('---> Estoy haciendo esto mientras se esta leyendo el archivo.txt')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo segundo: ',text)
})
console.log("---> Puedo seguir haciendo cositas mientras leo el archivo2.txt")

// Se va a mostrar primero los primeros archivos gracias a la asincronia y a que, leer esos archivos toma tiempo por lo que el deja ese proceso esperando
// y pasa a ejecutar los console que son mas rapidos. Con la asincronia no se sabe cual se va a resolver primero y mostrarse