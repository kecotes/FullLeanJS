

/* let numeros = [100,20,30,50,200];

numeros.forEach( (numeros) => console.log(numeros) );

for(let i in numeros){
    console.log(numeros[i]);
}

for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
}

for( let numero of numeros ){
    console.log(numero);
} */

let personas = [
    {
        nombre: "Kevin",
        edad: 27
    },
    {
        nombre: "Adela",
        edad: 23
    },
    {
        nombre: "Aleja",
        edad:28
    }
];

for( pers of personas ){
    console.log(` ${pers.nombre} tiene ${pers.edad} años`);
}