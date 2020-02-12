const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const hfile = "header.html";
const bfile = "body.html";
const ffile = "footer.html";

http.createServer((request, response) => { // вызов метода создания http сервера
	let page = '';

	fs.readFile(hfile, 'utf8', (err, data) => {
		if (err) {
			console.log('Could not find or open file for reading\n');
			response.statusCode = 404;
			response.end();
		} else {
			page += data;
			fs.readFile(bfile, 'utf8', (err, data) => {
				if (err) {
					console.log('Could not find or open file for reading\n');
					response.statusCode = 404;
					response.end();
				} else {
					page += data;
					fs.readFile(ffile, 'utf8', (err, data) => {
						if (err) {
							console.log('Could not find or open file for reading\n');
							response.statusCode = 404;
							response.end();
						} else {
							page += data;
							response.writeHead(200, {'Content-Type': 'text/html'});
							response.end(page);
						}
					});
				}
			});
		}
	});
	console.log("Request accepted!");
}).listen(8080, () => {
	console.log("HTTP server works in 8080 port!\n");
});