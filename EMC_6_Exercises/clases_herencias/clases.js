// Como haciamos las clases e ES5
// La primera letra mayuscula denotaba que es una clase o una función que se tiene que usar con New


// Todas las clases tienen un constructor, y es lo primero que se ejecuta cuando se crea una clase

/* function Persona( nombre ){

    this.nombre = nombre;

    this.gritarNombre = function(){
        console.log( this.nombre.toUpperCase() );
    }

}

// Si se debeaba expandir la clase se usa este codigop
Persona.prototype.decirNombre = function(){
    console.log( this.nombre );
}

let kevin = new Persona("Kevin");
kevin.decirNombre();
kevin.gritarNombre();

console.log( kevin instanceof Persona ); */

// ES6

class Persona{
    
    constructor( nombre ){
        this.nombre = nombre;
    }

    decirNombre(){
        console.log( this.nombre );
    }

}

let kevin = new Persona("Kevin");

kevin.decirNombre();

console.log( kevin instanceof Persona );
console.log( kevin instanceof Object );

console.log( typeof Persona);
console.log( typeof Persona.prototype.decirNombre );

console.log("---------Clases como expresiones----------")

let Usuario = class {
    constructor(){
        this.nombre = "kev";
        this.email = "fgqw";
    }

    decirName(){
        console.log(`Tu nombre es ${this.nombre} y tu correo ${this.email}`);
    }

}

// kev es una instancia de la clase Usuario
let kev = new Usuario();

let jose = class {
    constructor(){

    }

    verlaNada(){
        console.log( "sad");
    }
}

let josue = new jose();

kev.decirName();
josue.verlaNada();

console.log( typeof kev);
console.log(kev instanceof Usuario)
//console.log(josue instanceof kev )


class Aprendiz extends Persona {
    constructor(nombre, programa, competencia, aprendices){
        super(nombre);
        this.programa = programa;
        this.competencia = competencia;
        this.aprendices = aprendices;
    }

    showDataAprendiz(){
        console.log("Datos del aprendiz: " + this.nombre + " " + this.programa + " " +
         this.competencia);
    }
    comprobar(){
        let i = 0;
        while(i < this.aprendices.length){
            if(this.aprendices[i].startsWith('J')){
                console.log("Este es el nombre que empieza por J: " + this.aprendices[i]);
            }else{
                console.log("Estos son los nombres extra: " + this.aprendices[i])
            }
        i++;
        }
    }
}

let aprendices = ["Juan", "Camilo", "Militza", "Raul"];
let juan = new Aprendiz("Juan", "Motores", "Mantenimiento de vehiculos", aprendices);
console.log(juan.showDataAprendiz())
juan.comprobar();