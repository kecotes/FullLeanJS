// El operador + se utiliza para forzar el cambio de tipo de dato a número
console.log(+"-5"); // -5 (number)

console.log('***Operador terniario***');
// (condición) ? valor verdadero : valor falso.
let sexo;
const res = (sexo != undefined ) ? sexo : "vaya al psicologo pls";
console.log(res);
console.log(typeof res)


console.log('***Operador AND &&***')
//Operador AND ( && ) «devuelve b si a y b son verdaderos, sino a»
console.log(45 && false ); //false
console.log(50 & "10" );  //true

let isCorrect = false;
const doTask = () => "OK!";   // Creamos función que devuelve "OK!"
console.log(isCorrect && doTask() ) // Si isCorrect es true, ejecuta doTask()


console.log('***Operador OR***')
//Operador OR ( || ) devuelve a (si es verdadero), o si no, b».
console.log(null || true); // true
console.log(true || false); // true

const userName = name || "Unknown name";

console.log("Manz" || "Unknown name");      // "Manz"
console.log(0 || "Unknow Name"); // "Unknown name" Los 0 los reconoce como false
console.log(userName)        // "Unknown name"

console.log('***Operador Nullish ( ?? )***');
// a ?? b devuelve b sólo cuando a es undefined o null

//tenemos un objeto data donde tenemos almacenado la cantidad de balas que le quedan a un personaje.
//Si necesitamos mostrar al usuario visualmente en el menú que se ha quedado sin balas, quizás nos podría 
//interesar utilizar el operador ||. Por otro lado, si lo que queremos es sumar la cantidad de balas que tiene, con la cantidad de proyectiles, quizás nos interesaría más utilizar el operador ??.

const data = { ammo: 0 }
data.ammo || "Sin balas";     // "Sin balas"
data.ammo ?? "Sin balas";     // 0

const data2 = {}
data.ammo || "Sin balas";     // "Sin balas"
data.ammo ?? "Sin balas";     // "Sin balas"

console.log('***Asignación lógica nula***');
//si una variable tiene valores null o undefined (valores nullish) y sólo en esos casos, queremos cambiar su valor.


let x, y;
// Sin asignación lógica nula
if (x === null || x === undefined) {
    console.log(x = 50);
  }
  
// Con asignación lógica nula
console.log(y ??= 50);

//Recuerda que a ??= b es equivalente a a ?? (a = b).

const resetConfig = (data) => {
    data.life ??= 100; //si a es undefined or null devuelve b
    data.level ??= 1;
    return data;
}

resetConfig({life:25, level: null});
resetConfig({});

console.log('***Encadenamiento opcional***');
const usuario = {
    name: 'Kev',
    role: 'Programing',
    attrs:{
        life: 100
    }
}

console.log(usuario.attrs.life); // life
console.log(usuario.attrs.power); // error
console.log(usuario?.aver);
console.log(usuario.attrs?.quetal);

console.log('***Operador NOT***');
// es un operador unario que se utiliza para negar un valor, es decir, para invertir su valor 
console.log(!true); //false
console.log(!!true); //true
console.log(!!!true); //false
console.log(!44);          // false (se evalua como !true)
console.log(!0);           // true (se evalua como !false)
console.log(!"");          // true (se evalua como !0, que es !false)
console.log(!(10 || 23));  // false (se evalua como !10, que es !true)

