// Son una lista ordenada de valores sin duplicados

let items = new Set([1,2,3,4,5,6,7,8,9,2,2,2]);

//items.add(2);

console.log(items.size);
console.log(items);

//Buscar un item
console.log(items.has(7));

// remove items, primero se verifica si existe
if( items.has(3)){
    items.delete( 3 );
}

console.log(items);

//para borrar todo el set
//items.clear();