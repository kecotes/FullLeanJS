// lo bueno de Nodejs es que nos da una biblioteca enorme de modulos nativos que nos da acceso al sistema de archivo, al so, a internet

// A la hora de importar modulos nativos de nodejs se puede usar el nombre del modulo 'os' o el recomendado que esta abajo
const os = require('node:os');

console.log('Informacion del sistema operativo: ');
console.log('--------------------')

console.log('Nombre del sistema operativo', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUs', os.cpus()); // Esto es avanzado (Saber cuantos procesadores tiene tiene el pc) ya que podremos escalar procesos en Node. 
console.log('Memoria libre', os.freemem() / 1024 / 1024);
console.log('Memoria total', os.totalmem() / 1024 / 1024);
console.log('Dias que tiene encendido el pc ', os.uptime() / 60 / 60);




