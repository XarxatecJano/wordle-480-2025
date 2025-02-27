import { MAX_WORD_SIZE } from "../config/env.js";
import { LetterCheckerFactory } from "../checkers/LetterCheckerFactory.js";
import { WordState } from "../core/WordCheckerData.js";
var EnterPressed = /** @class */ (function () {
    function EnterPressed(game) {
        this._game = game;
    }
    EnterPressed.prototype.execute = function () {
        if (this._game.actualWord.length == MAX_WORD_SIZE) {
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this.updateKeyColors(this._game.actualWord, this._game.pickedWord);
            this.updateAfterANewWord();
        }
    };
    EnterPressed.prototype.updateAfterANewWord = function () {
        var letterCheckerFactory = LetterCheckerFactory.createCheckers(this);
        var wordData = new WordState(this._game.actualWord, this._game.pickedWord, this._game.turn);
        letterCheckerFactory.forEach(function (checker) { return checker.check(wordData); });
        this.resetWordState();
    };
    EnterPressed.prototype.resetWordState = function () {
        this._game.turn = this._game.turn + 1;
        this._game.actualPosition = 0;
        this._game.actualWord = "";
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
