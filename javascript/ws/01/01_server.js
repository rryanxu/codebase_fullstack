const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
    console.log('Client connected');

    // Handle messages from clients
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);

        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle disconnection
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
