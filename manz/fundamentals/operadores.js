// El operador + se utiliza para forzar el cambio de tipo de dato a número
console.log(+"-5"); // -5 (number)

//Operador terniario
// (condición) ? valor verdadero : valor falso.
let sexo;
const res = (sexo != undefined ) ? sexo : "vaya al psicologo pls";
console.log(res);
console.log(typeof res)

//Operador AND ( || ) «devuelve b si a y b son verdaderos, sino a»
console.log(45 && false ); //false
console.log(50 & "10" );  //true

let isCorrect = false;
const doTask = () => "OK!";   // Creamos función que devuelve "OK!"
console.log(isCorrect && doTask() ) // Si isCorrect es true, ejecuta doTask()





//tenemos un objeto data donde tenemos almacenado la cantidad de balas que le quedan a un personaje.
//Si necesitamos mostrar al usuario visualmente en el menú que se ha quedado sin balas, quizás nos podría 
//interesar utilizar el operador ||. Por otro lado, si lo que queremos es sumar la cantidad de balas que tiene, con la cantidad de proyectiles, quizás nos interesaría más utilizar el operador ??.

const data = { ammo: 0 }
data.ammo || "Sin balas";     // "Sin balas"
data.ammo ?? "Sin balas";     // 0

const data2 = {}
data.ammo || "Sin balas";     // "Sin balas"
data.ammo ?? "Sin balas";     // "Sin balas"
//la propiedad ammo aquí es undefined


