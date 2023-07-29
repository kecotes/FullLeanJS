// Clasicamente se utilizaba y se utiliza commonJS para exportar modulos, como este por ejemplo

function sum(a, b){
    return a + b;
}

// module es una variable global que utilizamos para indicar que modulos esta exportando este archivo
module.exports = {
    sum
};