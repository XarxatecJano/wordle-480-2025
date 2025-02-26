import { MAX_WORD_SIZE } from "./env.js";
import { EndGame } from "./EndGame.js";
import { WordTryState } from "./WordTryState.js";
import { Key } from "./Key.js";
var WordTry = /** @class */ (function () {
    function WordTry(pickedWord, turn, letterHistory, interface0) {
        this._wordTry = "";
        this._pickedWord = pickedWord;
        this._turn = turn;
        //this._actualPosition = 0;
        this._interface = interface0;
        this._letterHistory = letterHistory;
        this._key = new Key();
    }
    Object.defineProperty(WordTry.prototype, "guessWord", {
        get: function () {
            return this._wordTry;
        },
        set: function (value) {
            this._wordTry = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WordTry.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (value) {
            this._turn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WordTry.prototype, "letterHistory", {
        get: function () {
            return this._letterHistory;
        },
        set: function (value) {
            this._letterHistory = value;
        },
        enumerable: false,
        configurable: true
    });
    WordTry.prototype.getWord = function () {
        return this._wordTry;
    };
    WordTry.prototype.getTurn = function () {
        return this._turn;
    };
    WordTry.prototype.addLetterIfPossible = function (code) {
        var actualPosition = this._wordTry.length;
        if (actualPosition < MAX_WORD_SIZE) {
            var letter = this._key.transformCodeToLetter(code);
            this._interface.setNewLetter(this.turn, actualPosition, letter);
            this._interface.changeBackgroundKey(code);
            //this._actualPosition += 1;
            this._wordTry += letter;
        }
    };
    WordTry.prototype.deleteLetterIfPossible = function () {
        var actualPosition = this._wordTry.length;
        if (actualPosition > 0) {
            var lastLetterPos = actualPosition - 1;
            this._interface.deleteLetter(this._turn, lastLetterPos);
            this._interface.resetLastLetterBGColor(this._wordTry, this._letterHistory);
            this._wordTry = this._wordTry.substring(0, this._wordTry.length - 1);
        }
    };
    WordTry.prototype.enterPressed = function () {
        var wordTry = this._wordTry;
        var turn = this._turn;
        var endGame = new EndGame(wordTry, this._pickedWord, turn);
        if (wordTry.length == MAX_WORD_SIZE) {
            endGame.endGameScreen();
            this.updateAfterANewWord();
        }
    };
    WordTry.prototype.updateLetterHistory = function () {
        var wordTry = this._wordTry;
        for (var _i = 0, wordTry_1 = wordTry; _i < wordTry_1.length; _i++) {
            var letter = wordTry_1[_i];
            this._letterHistory.add(letter);
        }
    };
    WordTry.prototype.updateAfterANewWord = function () {
        var wordTryState = new WordTryState(this, this._pickedWord, this._interface);
        wordTryState.updateWordTryStates();
        this.updateLetterHistory();
        this._turn += 1;
        //this._actualPosition = 0;
        this._wordTry = "";
    };
    return WordTry;
}());
export { WordTry };
