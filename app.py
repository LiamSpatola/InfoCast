from os import environ

from dotenv import load_dotenv
from flask import Flask
from flask_socketio import SocketIO, send


# Configuring the app and websockets
app = Flask(__name__)
socketio = SocketIO(app)

# Loading the environment variables from the .env file
load_dotenv()


# Configuring the secret key
app.config["SECRET_KEY"] = environ.get("SECRET_KEY", default="super-secret-key")


@app.route("/")
def index():
    return "Page under construction"


@socketio.on("broadcast")
def handle_broadcast(msg):
    # Handling a broadcast to the display
    send(msg, broadcast=True)


@socketio.on("connect")
def handle_connect():
    print("Client connected")


@socketio.on("disconnect")
def handle_disconnect():
    print("Client disconnected")


if __name__ == "__main__":
    socketio.run(app, debug=True)
