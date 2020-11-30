const socket = io('http://localhost:8000');
let msgElement = document.getElementById('msg');

socket.on('connect', (data) => {
    socket.on('welcome', (msg) => {
        console.log(msg)
    });
    socket.emit('message', 'hello how are you')
});

