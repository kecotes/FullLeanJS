const { readFile } = require("fs");

//En las promesas no sabemos realmente cuanto tiempo demore este fragmento de codigo en ejecutarse
//Por esto es que estas se ejecutan independientemente de las demas lineas de codigo evitando un bloking code
//No sabemos si el codigo se resolvera bien o si fallara por eso los parametros resolve y reject
function getText(pathFile) {
	return new Promise(function (resolve, reject) {
		readFile(pathFile, "utf-8", (err, data) => {
			if (err) {
				reject(err);
			}

			resolve(data);
		});
	});
}

//then cuando termines de ejecutar la promesa y esto termine bien ejecuta then, si no catch
getText("./data/four.txt")
	.then(function (result) {
		console.log(result);
	})
	//Puedo volver a ejecutar otra lectura de texto
	.then(() => getText("./data/first.txt"))
	//El resultado que reciba de la anterior lectura me lo muestras acá
	.then((result) => console.log(result))
	.catch(function (error) {
		console.log(error);
	});
//Si cualquier then falla lo captura el catch

/* Equivalente al de arriba
getText("./data/four.txx")
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
 */
