const socket = io('http://localhost:9000');

let form = document.getElementById('message_form');
let message_list = document.getElementById('message_list');
socket.on('connect', () => {
    console.log("we are connected to the socket")
});

socket.on('messageFromServer', (dataFromServer) => {
    console.log(dataFromServer)
});

socket.emit('messageToServer', {data: 'This is a message from the CLIENT'})



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageElement = document.getElementById('user_message');
    console.log(messageElement.value)
    socket.emit('message', {text: messageElement.value});
    messageElement.value = '';
});

socket.on('messageToClients', (msg) => {
    message_list.innerHTML += `<li>${msg.text.text}</li>`
})


