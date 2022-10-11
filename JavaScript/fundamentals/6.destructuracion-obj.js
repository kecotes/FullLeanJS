
const element = [5, 2];
const [first, last] = element;    // first = 5, last = 2

const elements = [5, 4, 3, 2];
const [one, second] = elements;  // one = 5, second = 4, rest = discard

console.log('--- Intercambio de variables con destructuración ---');

let a =4
    b = 7;

let aux = a;
a = b;
b = aux; // Sin utilizar destructuración
console.log( `A antes era 4 ahora es: ${a} y b antes era 7 ahora es: ${b}`)

let c = 4
    d = 7;

[c,d] = [d,c]; // Utilizando destructuración
console.log([c,d]);


console.log('--- Operador Spread (Expandir)---')

const debug = (param) => console.log(...param);

const array = [1,2,3,4,5];
debug(array);// 1, 2 , 3 , 4 , 5

// Analicemos lo que ha ocurrido. Le hemos pasado un array de 5 elementos a la función debug() la cuál ha desestructurado 
// el array y lo ha expandido en elementos individuales (observa como lo devuelve).

console.log('--- Operador Rest (Agrupar) ---')

const debug2 = (...param) => console.log(param);

debug2(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// colocamos los ... en los parámetros de la función. Luego, al llamar a la función debug() le pasamos los 5 datos individuales 
// En este caso, el ...param está agrupando esas 5 variables en un array.

const element2 = [5, 4, 3, 2];
const [onee, ...rest] = elements;  // first = 5, rest = [4, 3, 2]
//el primer elemento del array se guarda en la variable first, sin embargo, el resto de valores, se almacena en la variable rest y se agrupa en un array


console.log('--- Destructuración de Objetos ---');

//Imaginemos que tenemos una estructura de datos que es un objeto
const user = {
    name: "kev",
    role: "streamer",
    life: 100
  }
  
  //separamos las propiedades name, role y life en variables individuales, «sacándolas» de user
  const { name, role, life } = user;
  /* Podemos renombrar propiedades en este caso role pasa a ser type
  const { name, role: type, life } = user;
  Podemos tambien agregar valores por defecto y en caso está propieda no tenga un valor o no exista, ya lo tenga.
  const { name, role = "normal user", life = 100 } = user;
  */
  console.log(name);
  console.log(role, life);
  
  //En esta línea, «volvemos a estructurar» en un objeto, uniendo las diferentes variables en un objeto a la hora de mostrarlo por consola.
  console.log({ name, role, life });



