
// REST: Junta los elementos en un arreglo
function saludarRest( saludo, ...nombres ){
    for( i in nombres ){
        console.log(`${saludo} ${nombres[i]}`);
    }
} 

saludarRest("Hola", "fernando","maria","juani");

// SPREAD: Esparce los elementos como si fueran enviaos de forma separada
function saludarSpread( saludo, ...nombres){
    console.log(`${saludo} ${nombres}.`);
}

let personas = ["melisa","hernando","juanes"]
saludarSpread("Como estan!", personas);


// Otro ejemplo spread
let partes = ["brazos", "piernas"];
let cuerpo = ["cabeza","cuello", ...partes, "pies", "dedos"];

console.log(cuerpo);