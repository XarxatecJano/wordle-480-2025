export class KeyDownListener {
    constructor(inputHandler) {
        this._inputHandler = inputHandler;
    }
    listen(callback) {
        document.addEventListener("keydown", (e) => {
            this._inputHandler.newKeyPressed(e.code);
        });
    }
}
