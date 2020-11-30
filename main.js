let form = document.getElementById('message_form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageElement = document.getElementById('user_message');
    console.log(messageElement.value)
    socket.emit('message', {data: messageElement.value});
    messageElement.value = '';
})
const socket = io('http://localhost:9000');

socket.on('connect', () => {
    socket.on('messageFromServer', (dataFromServer) => {
        console.log(dataFromServer)
    });
    socket.emit('messageToServer', {data: 'This is a message from the CLIENT'})
});


