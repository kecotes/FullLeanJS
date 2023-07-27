let ajustes = {
    nombre: "Kevin",
    email: "kev@protonmail.com",
    facebook: "kevinwebtarai",
    google: "kevin.cotes",
    premium: true,
    tiktok: "kevincortes"
};

//let nombre = ajustes.nombre, 
//    email = ajustes.facebook;

//console.log(nombre,email);


// Aquí respeta el tiktok=kevincortes porque es el definido en el objeto, y obvia el opcional mandado aquí abajo
let {  nombre, email, facebook, google, premium:dePago, twitter = "kevinweb", tiktok:tiki = "kelvin"  } = ajustes;

console.log(nombre,email, facebook, google, dePago, twitter, tiki);