const http = require('http');//подключение модуля

http.createServer((req, res) => {//вызов метода создания http сервера
	console.log("HTTP works!");
	res.writeHead(404, {'Content-Type':'text/html'});
	res.write('<h1>404</h1><p>Page not found</p>');
	res.end();
}).listen(8080);