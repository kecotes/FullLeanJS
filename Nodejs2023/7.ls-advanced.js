const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

// Si no le envio argumentos a esta aplicacion me devolvera todos los archivos de esta carpeta
// Si le envio argumentos me devolvera los argumentos de la que haya enviado ejemplo: node 7.ls-avanced.js ../
fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        if(err) {
            console.error('Error al leer',err);
            return;
        }
    })
