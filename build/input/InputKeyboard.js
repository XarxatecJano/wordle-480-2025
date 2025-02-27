import { Letter } from "../game/word/Letter.js";
var InputKeyboard = /** @class */ (function () {
    function InputKeyboard(game) {
        this.game = game;
    }
    ;
    InputKeyboard.prototype.enterPressed = function () {
        if (this.game.wordIsMaxLength()) {
            this.game.submitWord();
        }
    };
    InputKeyboard.prototype.backspacePressed = function () {
        if (this.game.getWordSize() > 0) {
            this.game.removeLastLetter();
        }
    };
    InputKeyboard.prototype.newKeyPressed = function (code) {
        var letter = new Letter(code);
        if (letter.isValidLetter()) {
            this.game.setNewLetter(letter);
        }
        else if (letter.isEnterKey()) {
            this.enterPressed();
        }
        else if (letter.isBackspaceKey()) {
            this.backspacePressed();
        }
    };
    return InputKeyboard;
}());
export { InputKeyboard };
