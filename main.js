let ws = new WebSocket('ws://localhost:8000');

ws.onopen = (event) => {
    ws.send("I am happy that I am now connected to the server")
}

ws.onmessage = event => {
   console.log(event);
}