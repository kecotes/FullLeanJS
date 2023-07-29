// Este es ubno de los modulos mas importantes de Node

const fs = require('node:fs') // a partir de node16 se recomienda poner los dos puntos 'node:fs'

// NodeJs es modo hilo, solo tiene un threads, y esta basado en eventos. Es un solo loop que se repite y puede dejar procesos en espera y continuar con otros
// Con asincronia utiliza la arquitectura de eventos.
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size, // tamanio en bytes
)
