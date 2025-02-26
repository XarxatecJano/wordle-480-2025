import { MAX_WORD_SIZE } from "./env.js";
var LetterState = /** @class */ (function () {
    function LetterState(actualWord, pickedWord, interface0) {
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
        this._interface = interface0;
    }
    Object.defineProperty(LetterState.prototype, "guessWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (value) {
            this._actualWord = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LetterState.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        set: function (value) {
            this._pickedWord = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LetterState.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (value) {
            this._interface = value;
        },
        enumerable: false,
        configurable: true
    });
    LetterState.prototype.getLetterPositionState = function (index) {
        var letter = this._actualWord._guessWord[index];
        if (this._pickedWord[index] == letter)
            return "rightLetter";
        else {
            var pattern = new RegExp(letter, "g");
            var numberOfCoincidences = (this._pickedWord.match(pattern) || []).length;
            if (numberOfCoincidences == 0)
                return "wrongLetter";
            else
                return "misplacedLetter";
        }
    };
    LetterState.prototype.updateGuessedStates = function () {
        var turn = this._actualWord._turn;
        var letterState;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            letterState = this.getLetterPositionState(i);
            this._interface.changeBackgroundPosition(turn, i, letterState);
        }
    };
    return LetterState;
}());
export { LetterState };
