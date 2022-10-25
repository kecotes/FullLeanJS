const http = require("http");

http.createServer(function (request, response) {
	console.log(request.url);

	if (request.url === "/") {
		response.write("Bienvenido al servidor");
		return response.end();
	}
	if (request.url === "/about") {
		response.write("acerca de");
		/* Los return en js terminan con la ejecuciónd e la función donde estan, de ahí pa abajo no sigue más*/
		return response.end();
	}

	response.write("not found");
	response.end();
}).listen(3000);

console.log("Servidor en el puerto 3000");
