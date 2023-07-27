

let texto = "Hola";

console.log(  texto.repeat(2) );
console.log(  "5".repeat(2) );


const ESPACIOS = 10;

let nombres = ["Fernando","Melisa","Juan"];
let telefonos = ["3000","13131","31411"];

for(i in nombres ){
    let dif = ESPACIOS - nombres[i].length;

    console.log(  nombres[i] + " ".repeat(dif) + "|" + telefonos[i] );
}

let aprendices = ["Juan", "Camilo", "Militza", "Raul"];

function comprobar(aprendices){
    let i = 0;
    while(i < aprendices.length){
        if(aprendices[i].startsWith('J')){
            console.log("Este es el nombre que empieza por J: " + aprendices[i]);
        }else{
            console.log("Estos son los nombres extra: " + aprendices[i])
        }
    i++;
    }
}

comprobar(aprendices);