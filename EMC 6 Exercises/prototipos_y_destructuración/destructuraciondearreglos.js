let frutas = ["banano","pera","uva"];

let [ fruta1, fruta2 ] = frutas;

console.log(fruta1,fruta2);

let [,,fruta3] = frutas;

console.log( fruta3 );

let otraFruta = "manzana";

[otraFruta ] = frutas;

console.log(otraFruta);

console.log("------------------------");

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b= temp;

console.log( a);
console.log( b);

[a,b] = [b,a];

console.log( a);
console.log( b);

// en un arr de js podemos meter lo que sea

let arrObj = [
    {
        id: 1,
        name: "jos",
        age: 13
    },
    {
        test: true
    },
    {
        show(){
            return "xD"
        }
    }
];

console.log(arrObj[1])
