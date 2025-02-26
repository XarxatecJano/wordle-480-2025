import { MAX_WORD_SIZE } from "../env.js";
var EnterPressed = /** @class */ (function () {
    function EnterPressed(game) {
        this._game = game;
    }
    EnterPressed.prototype.execute = function () {
        if (this._game.actualWord.length == MAX_WORD_SIZE) {
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this.updateKeyColors(this._game.actualWord, this._game.pickedWord);
            this._game.updateAfterANewWord();
        }
    };
    EnterPressed.prototype.updateKeyColors = function (word, correctWord) {
        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            var code = letter != "Ñ" ? "Key" + letter : "Semicolon";
            var state = "default";
            if (correctWord.includes(letter)) {
                state = correctWord[i] === letter ? "rightLetter" : "misplacedLetter";
            }
            this._game.changeBackgroundKey(code, state);
        }
    };
    return EnterPressed;
}());
export { EnterPressed };
