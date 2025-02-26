import { MAX_WORD_SIZE } from "./env.js";
var WordTryState = /** @class */ (function () {
    function WordTryState(actualWord, pickedWord, interface0) {
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
        this._interface = interface0;
    }
    Object.defineProperty(WordTryState.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WordTryState.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        set: function (value) {
            this._pickedWord = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WordTryState.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (value) {
            this._interface = value;
        },
        enumerable: false,
        configurable: true
    });
    WordTryState.prototype.getLetterPositionState = function (index) {
        var letter = this._actualWord.getWord()[index];
        if (this._pickedWord[index] == letter)
            return "rightLetter";
        var pattern = new RegExp(letter, "g");
        var numberOfCoincidences = (this._pickedWord.match(pattern) || []).length;
        if (numberOfCoincidences == 0)
            return "wrongLetter";
        return "misplacedLetter";
    };
    WordTryState.prototype.updateWordTryStates = function () {
        var turn = this._actualWord.getTurn();
        var letterState;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            letterState = this.getLetterPositionState(i);
            this._interface.changeBackgroundPosition(turn, i, letterState);
        }
    };
    return WordTryState;
}());
export { WordTryState };
