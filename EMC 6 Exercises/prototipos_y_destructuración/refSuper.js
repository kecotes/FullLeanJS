
// * En el ES5 era complicado hacer un llamado a un metodo de una función que está heredada de un objeto que viene de un prototipo 
// Resumen: Difcil llamar a metodos que vienen heredados de prototipos

let persona = {
    saludar(){
        return "Hola papi";
    }
};

let amigo = {
    saludar(){
        //return Object.getPrototypeOf(this).saludar(this) + ", saludos!!!";
        return super.saludar() + ", quiubo!";
    }
}

// amigo hereda protipo/propiedades de persona
Object.setPrototypeOf(amigo, persona);

console.log( amigo.saludar() );