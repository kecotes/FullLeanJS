const { readFile } = require("fs");

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

//Async sirve para que especifiquemos que lo que contiene una función es asincrono
//Await es cuando estamos usado una funcion asincrona para indicar que ese codigo demorará

async function read() {
	try {
		const result = await getText("./data/second.txt");
		const result2 = await getText("./data/four.txt");
		console.log(result);
		console.log(result2);
		//Con throw creamos errores
		//throw new Error("Esto es un error que no se esperaba");
	} catch (error) {
		console.log(error);
	}
}

read();
