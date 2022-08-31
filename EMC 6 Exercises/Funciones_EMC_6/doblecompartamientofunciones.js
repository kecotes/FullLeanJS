/* // En ECM5 las funciones sirven con un doble propósito de ser
// llamadas con o sin la palabra reservada "new"
console.log("---Solución con EMC5---")

var nombre ="JUan"

function Persona(nombre){
    this.nombre = nombre;
}


// Con 'NEW' el valor de "THIS" dentro de la función es un 
// nuevo objeto y ese nuevo objeto es retornado 

// Aqui estamos creando una nueva instancia del objeto persona
var persona = new Persona("Fernando");

// Sin "NEW" simplemente hacemos el llamado de la función y 
// esperamos que el retorno de algún valor procesado que puede
// ser un objeto, undefined o null.


//Aqui simplemente estamos llamando a la función y como está no retorna nada es undefined
var noEsPersona = Persona("Fernando");


console.log(persona);
console.log(noEsPersona); */

// ----------- Haciendolo en EMC6 ----------

// NEW.TARGET es una META PROPIEDAD y una meta propiedad es una propiedad de un no-objeto,
// que provee información adicional relacionada con su procedencia (como el new)
// Cuando el constructor de la función es llamada, new.target se llena con el operador new.
// Si la función "Call()" es ejecutada, "new.target" no estará definida ya que no se ejecutó el constructor
// *** Es una alternativa al instaceof es para evaluar si objeto se creo utilizando el new ****
console.log("---Solución con EMC5---");

function Persona1(nombre1){
    // Hacemos esto para determinar si la funcion fue llamada por el objeto new o otro
    if (typeof new.target !== "undefined" ){
        this.nombre1 = nombre1;
    }else{
        throw new Error('Esta función debe ser utilizada con new');
    }

    this.nombre1 = nombre1;
}


var persona1 = new Persona1("Fernan");

var noEsPersona1 = Persona1.call(persona1,"Fer");

