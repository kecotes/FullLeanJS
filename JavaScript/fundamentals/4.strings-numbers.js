console.log("Hola Kevin".length); //Muestra el total de caracteres

const saludo = "Hey!";
const saludoInv = "";
console.log(saludo[3]); //Accedemos a un caracter en especifico

for (let i=0; i<saludo.length; i++) {
    console.log(saludo[i]);
}

//Metodo repeat
console.log(saludo.repeat(5));

//Interpolación de las variables
const magicalWorld = `<strong>Magical World</strong>`;
const template = `
    <div class="container">
        ${magicalWorld}
    </div>
`;


function makeButton(className, text){
    return `<button class="${className}">${text}</button>`;
}

makeButton("primary", "Aceptar");
makeButton("warning", "Eliminar");




//Posición de cierto carácter
const phrase ="JavaScript es genial ve"; //22 carácteres
console.log(phrase.indexOf("v")); // Posicion donde está la letra v
console.log(phrase.indexOf("g",10)); //4 (10 es la posición en la "empezará a contar")


//Posición desde el final
console.log(phrase.lastIndexOf("l",20));