var restar = (a,b) => a - b;

console.log( typeof restar );
console.log( restar instanceof Function );

//var restar2 = new restar(1,2);


function ejemplo(x,y){
    //Funcion anonima el parentesis final es para ejecutarla enseguida
    ((a,b) => {
        console.log( arguments[1] )
    })();
}

ejemplo(10,20);