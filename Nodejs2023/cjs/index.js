//console.log(typeof window)
//console.log(window)

// gobalThis es una variable global de toda la aplicacion. En el navegador está apunta a wndow. En el navegador se usa window
// globalThis En nodejs apunta a global. En el computador se utiliza global
// console.log(globalThis)

// console es un atriuto de la variable globalThis y global. Tambien Fetch, Math, todo viene de global
// globalThis.console.log(globalThis)

// Estamos importando un modulo que creamos, esta es la forma clasica de hacerlo con commonJS
const { sum } = require("./sum");
console.log(sum(1,3));

