const WebSocket = require('ws');
const server = new WebSocket.Server({port: 8888});

server.on('connection', ws => {
    ws.send('Добро пожаловать!');
})