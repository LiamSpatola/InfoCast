function getElement(element_id) {
    // Utility function to quickly get an element by its ID
    return document.getElementById(element_id);
}

window.bell = new Audio("static/audio/bell.mp3");

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

    window.socket.on('ring', function(action) {
        if (action == "start") {
            console.log("Ringing the bells");
            window.bell.loop = true;
            window.bell.play();
        } else {
            console.log("Stopping the bells");
            window.bell.pause();
            window.bell.currentTime = 0;
        }
    });

    window.socket.on('colour', function(colour) {
        document.body.style.background = colour;
    });

    window.socket.on('disconnect', function() {
        // Disconnecting from the server
        console.log('Disconnected from server');
    });
});

window.setInterval( function() {
    // Formatting the date
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    const dateString = `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;

    // Displaying the current time twice every second
    getElement("current-time").innerHTML = "Current Time: " + dateString;
}, 500);
