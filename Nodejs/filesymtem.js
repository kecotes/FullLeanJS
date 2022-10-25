const fs = require("fs");

const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

const title = "creado por codigo";

fs.writeFileSync("./data/four.txt", title, {
	flag: "a",
});

/* Callback Hell */
fs.readFile("./data/first.txt", function (error, data) {
	console.log("ok, terminó");
	if (error) return console.log(error);

	console.log(data.toString());

	fs.readFile("./data/second.txt", function (error, data) {
		console.log("ok, terminó");
		if (error) return console.log(error);

		console.log(data.toString());

		fs.writeFile(
			"./data/new2.txt",
			"Archivo creado con fs",
			(err, data) => {
				console.log(err);
				console.log(data);

				fs.writeFile(
					"./data/new3.txt",
					"Archivo creado con fs",
					(err, data) => {
						console.log(err);
						console.log(data);
					}
				);
			}
		);
	});
});
