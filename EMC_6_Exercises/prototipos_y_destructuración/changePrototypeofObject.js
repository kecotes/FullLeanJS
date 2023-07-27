

let gato = {
    sonido(){
        console.log("Miau!");
    },
    chillido(){
        console.log("MIAUU!!");
    }
}

let perro = {
    sonido(){
        console.log("Guau!!");
    }
};

// Instanciaremos y/o crearemos una nueva variable utilizando todas las propiedades que tiene gato

let angora = Object.create(  gato );
console.log( Object.getPrototypeOf ( angora) === gato);

angora.sonido();
angora.chillido();

//Si ya tenemos todas nuestras variables cargadas y deseamos cambiarle un prototipo a un objeto 

// Convertimos un gato en perro, osea se pueden cambiar los prototipos con está
Object.setPrototypeOf(  angora, perro );

console.log( Object.getPrototypeOf ( angora) === gato);

angora.sonido();
angora.chillido();

