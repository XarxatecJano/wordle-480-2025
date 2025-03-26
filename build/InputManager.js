var InputManager = /** @class */ (function () {
    function InputManager() {
        this.validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY",
            "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS",
            "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK",
            "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB",
            "KeyN", "KeyM", "Semicolon"
        ];
    }
    InputManager.prototype.isValidLetter = function (code, actualPosition, maxWordSize) {
        return this.validLetterCodes.includes(code) && actualPosition < maxWordSize;
    };
    InputManager.prototype.isEnterKey = function (code) {
        return code === "Enter";
    };
    InputManager.prototype.isBackspaceKey = function (code) {
        return code === "Backspace";
    };
    InputManager.prototype.transformCodeToLetter = function (code) {
        return code === "Semicolon" ? "Ñ" : code.slice(3);
    };
    return InputManager;
}());
export { InputManager };
