import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

const app =express();
const port =8888;

app.use(express.static('public'));

const server =http.createServer(app);

const wss=new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log("New client connected");

    ws.on('message', (message) => {
        // wss.clients.forEach(client => {
        //     if (client.readyState === WebSocketServer.OPEN){
        //         client.send(message);
        //     }
        // });
        
        console.log('received: %s', message);
        ws.send(`${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        
    });

    ws.send(JSON.stringify({"event":"Connected", "message": "Welcome to the WebSocket server!!!"}));

    
});

 server.listen(port, ()=>{ console.log(`Server listening on ${port}`)});