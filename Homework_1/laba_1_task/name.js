const http = require('http');//подключение модуля

const server = http.createServer((req, res) => {//вызов метода создания http сервера
    console.log("HTTP works!");
});

server.listen(8080);