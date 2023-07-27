function crearJugador( nickname, 
    { hp, sp, clase } = { hp:100, sp:50, clase:"Mago" }
){

    // opciones = opciones || {}  // Si trae opciones asignalas si no asigna un array vacio por defecto

    /* let hp = opciones.hp,
        sp = opciones.sp,
        clase = opciones.clase;
    */

    console.log(nickname, hp, sp, clase);

    //codigo para crear el jugador ... 

}

//crearJugador("alaosa");

crearJugador("alaosa", {
    clase: "ninja",
    hp: 11940,
    sp: 3700    
});
