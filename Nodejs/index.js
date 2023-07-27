console.log("Hola desde node");
/*** --- Modulo Path --- ***/
process
process.version
process.versions.v8
proccess.cwd() //Donde estoy

const path = require("path");

const filePath = path.join("/Public", "dist", "/styles", "main.css");

/* console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.parse(filePath)); */

const requerido = true;
const saluda = () => "Hola papasito";

console.log(requerido && saluda());
console.log(45 && false); //45
console.log(50 && "10"); //true
