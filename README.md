# InfoCast
A simple live announcement system based off of the flask web framework and websockets.

## Installation
1. Clone the repository
    ```bash
    git clone https://github.com/LiamSpatola/InfoCast.git
    ```

2. Install poetry (if this is not already installed)
    ```bash
    pip install poetry
    ```

3. Go into the project directory
    ```bash
    cd InfoCast
    ```

4. Install the dependencies
    ```bash
    poetry install
    ```

5. Use the poetry shell
    ```bash
    poetry shell
    ```

6. Create a `.env` file with the following content:
    ```env
    SECRET_KEY="super-secret-key"
    ```
    **NOTE: Change the secret key to something secure!**

7. Run the app
    ```bash
    python app.py
    ```

## Usage
1. On the screen you wish to use as a display, navigate to `{your_ip}:5000`.
2. On another device or in another window, navigate to `{your_ip}:5000/backend`.
3. Input the message you want to display and press `Broadcast to Display`.
4. To ring the bells, press the buttons on the backend screen.