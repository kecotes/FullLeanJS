
// Un metodo estatico permite ejecutar una funcion dentro de la clase sin instanciar la clase
// se puede ejecutar decirNOmbre desde fuera de la clase sin tener que inicializar una variable

// Metodos computados son nombres de metodos que se pueden definir a traves de una variable
let nombreMetodo = "gritarNombre";

class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    decirNombre(){
        console.log( this.nombre );
    }

    [ nombreMetodo ](){
        console.log( this.nombre.toUpperCase() );
    }

    static crear( nombre ){
        return new Persona(nombre);
    }
}

let yo = Persona.crear( "kev" );

console.log( yo );
// en consola -> yo.gritarNombre() // KEV
// Para ponerlo en console log acá debo instanciar la clase Persona