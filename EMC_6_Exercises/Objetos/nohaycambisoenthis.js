

var manejador = {

    id: "123",

    // Por lo general el init es un estandar para decir que es una funcion
    // que se puede ejecutar cuando el objeto es creador (se pudo poner cualquier otro nombre)
    init: function(){
        document.addEventListener("click", (function(event){
            // click en pagina aparecia que no era una función porque this estaba apuntando al objeto global 
            this.clickEnPagina( event.type );
            console.log(this);
        }).bind(this),false);
    }, // fin del init

    clickEnPagina: function(type){
        console.log(`Manejando ${type} para el id: ${this.id}`);
    }

};

manejador.init();


var manejador1 = {

    id: "123",

    // Por lo general el init es un estandar para decir que es una funcion
    // que se puede ejecutar cuando el objeto es creador (se pudo poner cualquier otro nombre)
    init: function(){
        document.addeEventListener("click")
    }, // fin del init

    clickEnPagina: function(type){
        console.log(`Manejando ${type} para el id: ${this.id}`);
    }

};

manejador1.init();