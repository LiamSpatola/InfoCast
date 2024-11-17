from os import environ

from dotenv import load_dotenv
from flask import Flask, render_template
from flask_socketio import SocketIO, emit


# Configuring the app and websockets
app = Flask(__name__)
socketio = SocketIO(app)

# Loading the environment variables from the .env file
load_dotenv()


# Configuring the secret key
app.config["SECRET_KEY"] = environ.get("SECRET_KEY", default="super-secret-key")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/backend")
def backend():
    return render_template("backend.html")


@socketio.on("broadcast")
def handle_broadcast(msg):
    # Handling a broadcast to the display
    emit("broadcast", msg, broadcast=True)


@socketio.on("ring")
def handle_bells_ringing(action):
    # Handling ringing the bells. If action is 'start', the bells ring. If it is 'stop', they stop
    emit("ring", action, broadcast=True)


@socketio.on("connect")
def handle_connect():
    print("Client connected")


@socketio.on("disconnect")
def handle_disconnect():
    print("Client disconnected")


if __name__ == "__main__":
    socketio.run(app, debug=True)
