const fs = require('node:fs')

// Nuestra primera app que muestra todos los ficheros del actual directorio
fs.readdir('.', (err, files) => {
    if(err){
        console.error('Error al leer el directorio', err);
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})

