var Letter = /** @class */ (function () {
    function Letter(code) {
        this.code = "";
        this._validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.code = code;
    }
    Letter.prototype.transformCodeToLetter = function (code) {
        var letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    };
    Letter.prototype.getChar = function () {
        return this.transformCodeToLetter(this.code);
    };
    Letter.prototype.getCode = function () {
        return this.code;
    };
    Letter.prototype.isValidLetter = function () {
        return this._validLetterCodes.includes(this.code);
    };
    Letter.prototype.isEnterKey = function () {
        return this.code == "Enter";
    };
    Letter.prototype.isBackspaceKey = function () {
        return this.code == "Backspace";
    };
    Letter.prototype.equals = function (otherLetter) {
        return this.getCode() == otherLetter.getCode();
    };
    return Letter;
}());
export { Letter };
