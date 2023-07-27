// Permite agarrar todas las propiedas de un objeto y heredarselas o tramitirselas sin usar herencia exactamente.
// en EMC5 se barria todas las propiedas que tenia el objeto receptor

function mezclar( objReceptor, objDonador){
    //Object.keys barre todas las propiedades
    Object.keys( objDonador).forEach( function(key){
        objReceptor[key] = objDonador[key];
    });

    return objReceptor;
}

var objReceptor = {};
var objDonador = {
    //nombre: "archivo_1.js",
    get nombre(){
        return "archivo_2.js"
    }
}

console.log( objDonador )

console.log( mezclar( objReceptor, objDonador));

// En EMC6

console.log("--------------EMC6-------------")


console.log( Object.assign( objReceptor, objDonador));


