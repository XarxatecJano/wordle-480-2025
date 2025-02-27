import { Key } from "./keyboard/Key.js";
import { VALID_LETTERS } from "../env.js";
var GameKeyboard = /** @class */ (function () {
    function GameKeyboard(interfaceController) {
        this.keys = [];
        this.interface = interfaceController;
        var newKeys = [];
        for (var _i = 0, VALID_LETTERS_1 = VALID_LETTERS; _i < VALID_LETTERS_1.length; _i++) {
            var code = VALID_LETTERS_1[_i];
            var newKey = new Key(code);
            newKeys.push(newKey);
        }
        this.keys = newKeys;
    }
    GameKeyboard.getGameKeyboard = function (interfaceController) {
        if (this.gameKeyboard == null) {
            this.gameKeyboard = new GameKeyboard(interfaceController);
        }
        return this.gameKeyboard;
    };
    GameKeyboard.prototype.setKeyState = function (code, state) {
        var key = this.getKeyFromCode(code);
        if (key != null) {
            key.setState(state);
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
