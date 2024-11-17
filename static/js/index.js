function getElement(element_id) {
    // Utility function to quickly get an element by its ID
    return document.getElementById(element_id);
}

document.addEventListener('DOMContentLoaded', (event) => {
    window.socket = io();

    window.socket.on('connect', function() {
        // Connecting to the server
        console.log('Connected to server');
    });

    window.socket.on('broadcast', function(msg) {
        // Handling the receipt of a broadcast
        console.log('Broadcast Received: ' + msg);
        
        // Setting the display text to the message content
        getElement("msg-line-1").innerHTML = msg["line1"];
        getElement("msg-line-2").innerHTML = msg["line2"];
        getElement("msg-line-3").innerHTML = msg["line3"];
        getElement("msg-line-4").innerHTML = msg["line4"];
        getElement("msg-line-5").innerHTML = msg["line5"];
    });

    window.socket.on('disconnect', function() {
        // Disconnecting from the server
        console.log('Disconnected from server');
    });
});

window.setInterval( function() {
    // Displaying the current time twice every second
    getElement("current-time").innerHTML = "Current Time: " + Date();
}, 500);