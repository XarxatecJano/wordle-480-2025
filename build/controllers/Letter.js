import { PositionManager } from "./PositionManager";
var Letter = /** @class */ (function () {
    function Letter() {
        this._validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this._positionManager = PositionManager.getInstance();
    }
    Letter.getInstance = function () {
        if (!Letter._instance) {
            Letter._instance = new Letter();
        }
        return Letter._instance;
    };
    Object.defineProperty(Letter.prototype, "validLetterCodes", {
        get: function () {
            return this._validLetterCodes;
        },
        set: function (letters) {
            this._validLetterCodes = letters;
        },
        enumerable: false,
        configurable: true
    });
    Letter.prototype.includes = function (code) {
        return this._validLetterCodes.includes(code);
    };
    Letter.prototype.transformCodeToLetter = function (code) {
        var letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    };
    Letter.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Letter.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    Letter.prototype.isValidLetter = function (code) {
        return this.includes(code) && this._positionManager.isValidPosition();
    };
    return Letter;
}());
export { Letter };
