// El objeto proccess es un objeto global que proporciona informacion y control sobre el proceso actual de ejecucion
// Tiene propiedades y metodos que nos va a permitir interactuar con el entorno de dejecucion de nodejs y dar informacion del proceso actual

// Los argumentos de entrada son unas de las cosas que puede tener el proceso actual 
// Si le envio argumentos al programa me los mostrara ejemplo: node 6.proccess.js curso bacano uuu juju kev afa
//console.log(process.argv)

// Controlar el proceso y su salida
// process.exit(1) // Se sale del proceso

// podemos controlar eventos del proceso
//process.on('exit', () => {
    // limpiar recursos
//})


// current working directory
console.log(process.cwd())

// plaform
console.log(process.cpuUsage());
console.log(process.env); //Muestra las variables de entorno
console.log(process.env.JUANITO); //Me devuelve la variable de entorno que le envie ej: JUANITO=holis node 6.proccess.js