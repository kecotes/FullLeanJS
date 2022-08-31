// Al igual que podemos enviar una funcion como parametros podemos enviar una clase

/* function creadorClases( definicionClase){
    return new definicionClase();
}

let objeto = creadorClases( class{

    constructor(){
        this.nombre = undefined;
        this.edad = 5;
    }

    saludar(){
        console.log("Holis")
    }

});

objeto.saludar(); */


class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }

    getArea(){
        return this.lado * this.lado;
    }
};

//Está recibiendo un parametro que es una clase cuadrado
function imprimirCuadradado( cuadrado ){

    if( !(cuadrado instanceof Cuadrado) ){
        console.error("El parametro enviuado no es un cuadrado")
    }
    console.log( cuadrado.getArea() );
}

let mesa = new Cuadrado(10);
//let mesa = "123";  // error porque ya no estariamos mandando una clase

imprimirCuadradado( mesa );