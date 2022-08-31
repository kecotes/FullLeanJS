//Ejemplo x
var objeto = {
    nombre: "Melissa" // Propiedad / Valor de la propiedad
}

//Se puede poner un retorno simplificado siempre y cuando tengan el mismo nombre las variables

function crearPersona( nombre, apellido, edad ){
    return {
        nombre,
        apellido,
        edad
    }
}

var melissa = crearPersona("Melissa","Flores", 27);
console.log(melissa)