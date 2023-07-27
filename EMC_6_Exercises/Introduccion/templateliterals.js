function obternerNombre(){
    return "Jose Gomez"
}

let nombre = "Kevin";
let apellido = "Cotes";

let nombreCompleto = nombre + " " + apellido;

console.log( nombreCompleto ); 

// ----------  Usando Template Literales  ------------ 

// Cuando dentro de ` javascript encuentra un template literal ${}
// Ejecutará dentro de este cualquier codigo js puro 
let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido} `;
let nombreCompleto3 = `El nombre completo es ${obternerNombre()} otro ej: ${ 1+6 }`;
console.log(  nombreCompleto2 ); 
console.log(  nombreCompleto3 );

// Sin template literal era un dolor de cabeza escribir clases dentro de esas comillas por ej
let multiLineaOld = "<h1>Titulo</h1> \n <p>Contenido</p>"

// Facil escribir clases y saltos de linea
let multiLineaNew =  `<h1 class="">Titulo ${nombre}</h1>

<p>Contenido</p>`;

console.log(  multiLineaOld );
console.log(  multiLineaNew );

//  ------  Template Literal con Tags  ---------

 function etiqueta(){
    return "un texto";
}


function etiqueta2( literales, ...substituciones ){
    let resultado ="";

    console.log(literales);
    console.log(substituciones);

    for( let i=0; i < substituciones.length; i++ ){
        resultado += literales[i];
        resultado += substituciones[i];

    }
    
    return resultado
}

let unidades = 5,
    costo_unitario = 10;

// La etiqueta es una función que se ejecutará justo cuando se este ejecutando el t. literal    
// La etiqueta debe estar definida
// La etiqueta puede evaluar el t. literal y cambiarlo completamente antes de su asignación 
// A la variable mensaje

let mensaje = etiqueta2`${unidades} lapices cuestan ${unidades * costo_unitario} pesos`;


console.log(  mensaje );