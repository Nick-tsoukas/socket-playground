// changed port from 8000 to 9000
const socket = io('http://localhost:9000');

socket.on('connect', () => {
    socket.on('messageFromServer', (dataFromServer) => {
        console.log(dataFromServer)
    });
    socket.emit('messageToServer', {data: 'This is a message from the CLIENT'})
})


