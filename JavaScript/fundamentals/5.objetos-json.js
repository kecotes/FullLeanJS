// Se podria decir que un objeto es una variable que contiene más variables

const objeto = new Object();    // Evitar esta sintaxis en Javascript (no se suele usar)

const objeto1 = {}; //// Esto es un objeto vacío igual al anterior y se recomienda utilziar siempre está notación

const player = {
    name: "Kev",
    life: 100,
    health: 2,
    death: false,
} // Objeto player con 4 propiedades

player.power = 100; //Agregar una propieda nueva y un valor

console.log(player);
console.log(player.name); // Mostrar el valor de una propiedad
console.log(player.power) //Agregar una propieda nueva y un valor

console.log('--- Metodos de los objetos ---');

const user = {
    name: 'Adela',
    mirarFeo: () => 'Te miro feo', 
}

console.log(user.mirarFeo());
console.log(user.toString()); //Todos los objetos heredan por defecto ciertos metodos

console.log('--- JSON ---');

const json = `{
    "name": "Manz",
    "life": 99
  }`;

  console.log('Convertir JSON a objeto');
  const kev = JSON.parse(json);
  console.log(kev.name, kev.life);

  console.log('Convertir objeto a JSON');
  console.log(JSON.stringify(player));

  