export class ClickListener {
    constructor(inputHandler) {
        this._inputHandler = inputHandler;
    }
    listen(callback) {
        Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener(callback, (e) => {
            this._inputHandler.newKeyPressed(e.target.value);
        }));
    }
}
ClickListener.CALLBACK = "click";
