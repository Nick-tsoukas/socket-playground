// changed port from 8000 to 9000
const socket = io('http://localhost:9000');

// socket.on('messageFromServer', (dataFromServer) => {
//     console.log(dataFromServer);
//     socket.emit('messageToServer', {data: 'this is a message from the CLIENT'} )
// })

socket.on('connect', () => {
    console.log("we connected to the web socket");
    socket.on('messageFromServer', (dataFromServer) => {
        console.log(dataFromServer)
    });
    socket.emit('messageToServer', {data: 'This is a message from the CLIENT'})
})


