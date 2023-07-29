// .js usa por defecto commonJS
// .msj para utilizar ES Modules
// .cjs para utilizar commonJS
// En EMC Modules las extensiones son obligatorias
import { sum, res, mul, div } from './sum.mjs'

console.log(sum(1,2))
console.log(res(1,2))
console.log(mul(1,2))
console.log(div(1,2))