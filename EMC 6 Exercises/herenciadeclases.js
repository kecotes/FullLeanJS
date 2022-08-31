//No es más que transferirle metodos y propiedades a un hijo

class Rectangulo{
    constructor(alto, largo){
        // Esto se hace para inicializar estas variables
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return "Rectangulo: " + (this.alto * this.largo);
    }
}

let rectangulo = new Rectangulo(3,2);

//console.log(rectangulo.getArea());

// Vamos a hacer una herencia de Rectangulo
class Cuadrado extends Rectangulo{
    
    constructor(alto){
        // vamos a ejecutar el metodo constructor del padre, para eso se usa super, hace referencia al padre
        // aqui ejecutamos el constructor del padre
        super( alto, alto );
    }

    // Para sobre escribir un metodo en un hijo solo es escribir el metodo y lo sobre escribira, le dara prioridad al hijo
    getArea(){
        // return `Cuadrado: ${this.alto * this.alto}`;
        return super.getArea();
    }

}


let cuadrado = new Cuadrado( 3 );

console.log( cuadrado.getArea() );

console.log( cuadrado instanceof Cuadrado );
console.log( cuadrado instanceof Rectangulo )