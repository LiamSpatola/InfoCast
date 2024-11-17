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

    window.socket.on('disconnect', function() {
        // Disconnecting from the server
        console.log('Disconnected from server');
    });

});

function broadcastMessage() {
    // Handling the broadcast of a message to the display
    var msg_line_1 = getElement("msg-line-1-input").value;
    var msg_line_2 = getElement("msg-line-2-input").value;
    var msg_line_3 = getElement("msg-line-3-input").value;
    var msg_line_4 = getElement("msg-line-4-input").value;
    var msg_line_5 = getElement("msg-line-5-input").value;

    var msg = {
        line1: msg_line_1,
        line2: msg_line_2,
        line3: msg_line_3,
        line4: msg_line_4,
        line5: msg_line_5,
    };

    window.socket.emit("broadcast", msg);
}

function clearFields() {
    getElement("msg-line-1-input").value = "";
    getElement("msg-line-2-input").value = "";
    getElement("msg-line-3-input").value = "";
    getElement("msg-line-4-input").value = "";
    getElement("msg-line-5-input").value = "";
}