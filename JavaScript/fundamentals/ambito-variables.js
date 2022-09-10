
var a = 10;

console.log('por fuera ' + a);

function ambito(){
    console.log('por dentro antes de ' +a);

    var a=20;

    console.log('por dentro despues de: ' +a);
}
ambito()
console.log('resultado final ' + a);


// Con EMC6 LET, let mantiene el valor de sus variables en cada ambito, por fuera siempre será 200 por dentro
// de funciones será 300

let v=200;

console.log('por fuera: '+v);

    function ambitoLet() {
        let v=300;
        console.log('por dentro despues de ' +v);
    }

    ambitoLet();
console.log('resultado final '+v);


// Vemos que utilizando let la variable p sólo existe dentro del bucle, ámbito local, mientras que utilizando var la variable p sigue 
// existiendo fuera del bucle, ya que debe tener un ámbito global o a nivel de función.
/** Opción 1: Bucle con let **/

console.log("Antes: ", p);    // Antes: undefined
for (let p = 0; p < 3; p++)
  console.log("- ", p);       // Durante: 0, 1, 2
console.log("Después: ", p);  // Después: undefined

/** Opción 2: Bucle con var **/

console.log("Antes: ", p);    // Antes: undefined
for (var p = 0; p < 3; p++)
  console.log("- ", p);       // Durante: 0, 1, 2
console.log("Después: ", p);  // Después: 3 (WTF!)

