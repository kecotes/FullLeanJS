function works() {
    console.log('Una funcion clasica');
}
// Ahora el nombre de la función pasa a ser el nombre de la variable, mientras que el nombre de la 
// función desaparece y se omite, dando paso a lo que se llaman las funciones anónimas (o funciones lambda).
// Por esto es que son funciones anonimas () => { } :OOOO
const saludar = function saludo(kev = 'kevin') {
    return console.log('hola '+kev);
}

saludar();
// saludo(); //saludo is not defined

works();

console.log(' **** CallBack ****');
// A grandes rasgos, un callback (llamada hacia atrás) es pasar una función B por parámetro a una función A, de modo que 
// la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función

// Esto nos podría permitir crear varias funciones para utilizar a modo de callback

// fB = Función b (callback)
const fB = function () {
    console.log("Función B ejecutada.");
};

//fError =función Error (Callback)
const fError = function () {
    console.error('erro');
};

// fA = Función A
const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    (n > 2) ? callback() : callbackError();
};

//fA(fB,fError);

//Está forma utilizada si no deseamos crear variables que contengan callbacks
fA(
    function(){
        console.log("Función B Ejecutada.")
    },
    function() {
        console.error("Error")
    } );


console.log('*** Funciones Autoejecutables ***');

// Función autoejecutable se realiza simplemente encerrando la funcion en parentesis
(function () {
    console.log("Hola me ejecute automaticamente!!");
  })();
  
  // Función autoejecutable con parámetros
  (function (name) {
    console.log(`¡Hola, ${name}!`);
  })("Manz");

  // Cuando hay return se debe almacenenar en una variable
  const f = (function (name) {
    return `¡Hola, ${name}!`;
  })("Kev");

  console.log(f);

console.log('***Clausuras***');
// una clausura es una función que «encierra» variables en su propio ámbito (y que continúan existiendo aún habiendo terminado la función)

// Si nos fijamos en la función que devolvemos, lo que hace es 
// incrementar el valor de num y devolverlo. Como la variable incr es una clausura 
// y mantiene la variable en su propio ámbito, veremos que a medida que ejecutamos incr(), 
// los valores de num (que estamos devolviendo) conservan su valor y se van incrementando.

const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
  typeof incr; // 'function'
  incr(); // 1
  incr(); // 2
  incr(); // 3

  console.log('***Arrow Functions***');

  const arrowClasic = () => {
    console.log("Arrow Function Clasica");
  }

  const arrowSimply = () => "Arrow F simply";

  const arrowSymplyParam = (e) => e + 1;

  const arrowTwoParam = ( a , b ) => a + b;

arrowClasic();
console.log(arrowSimply());
console.log(arrowSymplyParam(1));
console.log(arrowTwoParam(2,2));



//Una buena práctica es utilizar funciones tradicionales como las funciones 
//de primer nivel y, luego, en su interior o en callbacks, utilizar funciones flecha, por el tema del this

padre = {
    a: function() {
        console.log(this)
    },
    b: () => {
        console.log(this)
    }
};

padre.a(); //padre
padre.b(); //Window