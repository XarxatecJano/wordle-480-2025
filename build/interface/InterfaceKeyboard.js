import { Key } from "./keyboard/Key.js";
import { VALID_LETTERS } from "../env.js";
var InterfaceKeyboard = /** @class */ (function () {
    function InterfaceKeyboard(interfaceController) {
        this.keys = [];
        this.userInterfaceController = interfaceController;
        var newKeys = [];
        for (var _i = 0, VALID_LETTERS_1 = VALID_LETTERS; _i < VALID_LETTERS_1.length; _i++) {
            var code = VALID_LETTERS_1[_i];
            var newKey = new Key(code);
            newKeys.push(newKey);
        }
        this.keys = newKeys;
    }
    InterfaceKeyboard.getGameKeyboard = function (interfaceController) {
        if (this.gameKeyboard == null) {
            this.gameKeyboard = new InterfaceKeyboard(interfaceController);
        }
        return this.gameKeyboard;
    };
    InterfaceKeyboard.prototype.setKeyState = function (code, state) {
        var key = this.getKeyFromCode(code);
        if (key != null) {
            key.setState(state);
            this.userInterfaceController.changeKeyboardElementBackground(key.getCode(), key.getState());
        }
    };
    InterfaceKeyboard.prototype.getKeyFromCode = function (code) {
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.getCode() == code)
                return key;
        }
        return null;
    };
    return InterfaceKeyboard;
}());
export { InterfaceKeyboard };
