let ws = new WebSocket('ws://localhost:8000');
let msgElement = document.getElementById('msg');
console.log(msgElement)
ws.onopen = (event) => {
    ws.send("I am happy that I am now connected to the server")
}

ws.onmessage = event => {
        msgElement.innerText = event.data

}