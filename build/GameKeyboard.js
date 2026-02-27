import { Key } from "./Key.js";
var GameKeyboard = /** @class */ (function () {
    function GameKeyboard(interfacec) {
        this.codes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.keys = [];
        this.interface = interfacec;
        var newKeys = [];
        for (var _i = 0, _a = this.codes; _i < _a.length; _i++) {
            var code = _a[_i];
            var newKey = new Key(code);
            newKeys.push(newKey);
        }
        this.keys = newKeys;
    }
    GameKeyboard.prototype.setKeyboardKeyState = function (code, state) {
        var key = this.getKeyFromCode(code);
        if (key != null) {
            key.setState(state);
            console.log('setkeyboardkeystate code: %s to: %s', key.getCode(), key.getState());
            this.interface.changeKeyboardElementBackground(key.getCode(), key.getState());
        }
    };
    GameKeyboard.prototype.getKeyFromCode = function (code) {
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.getCode() == code)
                return key;
        }
        return null;
    };
    return GameKeyboard;
}());
export { GameKeyboard };
