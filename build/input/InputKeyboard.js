import { Letter } from "../model/Letter.js";
var InputKeyboard = /** @class */ (function () {
    function InputKeyboard(game) {
        this.game = game;
    }
    ;
    InputKeyboard.prototype.addNewLetter = function (letter) {
        this.game.setNewLetter(letter);
    };
    InputKeyboard.prototype.enterPressed = function () {
        if (this.game.wordIsComplete()) {
            this.game.updateAfterANewWord();
        }
    };
    InputKeyboard.prototype.backspacePressed = function () {
        if (this.game.getWordSize() > 0) {
            this.game.removeLastLetter();
        }
    };
    InputKeyboard.prototype.newKeyPressed = function (code) {
        var letter = new Letter(code);
        if (this.game.isValidLetter(letter)) {
            this.addNewLetter(letter);
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
