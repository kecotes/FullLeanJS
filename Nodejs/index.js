console.log("Hola desde node");
/*** --- Modulo Path --- ***/

const path = require("path");

const filePath = path.join("/Public", "dist", "/styles", "main.css");

console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.parse(filePath));
