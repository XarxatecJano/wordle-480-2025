import { MAX_WORD_SIZE, MAX_ATTEMPTS, } from "./env.js";
import { Letter } from "./Letter.js";
import { Interface } from "./Interface.js";
var Checker = /** @class */ (function () {
    function Checker(pickedWord) {
        this._INITIAL_TURN = 1;
        this._INITIAL_POSITION = 0;
        this._actualWord = "";
        this._turn = this._INITIAL_TURN;
        this._currentPosition = this._INITIAL_POSITION;
        this._letterManager = Letter.getInstance();
        this._pickedWord = pickedWord;
        this._interface = new Interface();
    }
    Object.defineProperty(Checker.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        set: function (word) {
            this._pickedWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (num) {
            this._turn = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "currentPosition", {
        get: function () {
            return this._currentPosition;
        },
        set: function (num) {
            this._currentPosition = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (i) {
            this._interface = i;
        },
        enumerable: false,
        configurable: true
    });
    Checker.getInstance = function (pickedWord) {
        if (!Checker._instance) {
            Checker._instance = new Checker(pickedWord);
        }
        return Checker._instance;
    };
    Checker.prototype.isValidLetter = function (code) {
        return this._letterManager.includes(code) && this.currentPosition < MAX_WORD_SIZE;
    };
    Checker.prototype.checkWordIsRight = function () {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    };
    Checker.prototype.checkRightLetters = function (mapController) {
        var dictNumCoincidences = mapController.ColorMap;
        var choosenPositions = mapController.ChoosenPositionMap;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var letter = this._actualWord[i];
            if (this._pickedWord[i] == letter) {
                var numCoincidences = dictNumCoincidences.get(letter) || 0;
                this._interface.changeCheckedBackground(this._turn, i, "rightLetter", this._actualWord[i]);
                dictNumCoincidences.set(this._actualWord[i], numCoincidences - 1);
                choosenPositions.set(i, true);
            }
        }
    };
    Checker.prototype.checkMisplacedLetters = function (mapController) {
        var dictNumCoincidences = mapController.ColorMap;
        var choosenPositions = mapController.ChoosenPositionMap;
        var actualLetter = "";
        var isMisplacedLetter;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = this._actualWord[i];
            if (this._pickedWord[i] == actualLetter)
                isMisplacedLetter = false;
            if ((dictNumCoincidences.get(actualLetter) || 0) > 0 && isMisplacedLetter) {
                this._interface.changeCheckedBackground(this._turn, i, "misplacedLetter", this._actualWord[i]);
                var numCoincidences = dictNumCoincidences.get(actualLetter) || 0;
                dictNumCoincidences.set(actualLetter, numCoincidences - 1);
                choosenPositions.set(i, true);
            }
        }
    };
    Checker.prototype.checkWrongLetters = function (mapController) {
        var dictNumCoincidences = mapController.ColorMap;
        var choosenPositions = mapController.ChoosenPositionMap;
        var actualLetter = "";
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this._actualWord[i];
            var numCoincidences = dictNumCoincidences.get(actualLetter) || 0;
            if (numCoincidences == 0 && choosenPositions.get(i) == false) {
                this._interface.changeCheckedBackground(this._turn, i, "wrongLetter", this._actualWord[i]);
            }
        }
    };
    Checker.prototype.checkGameIsOver = function () {
        if (this._turn == MAX_ATTEMPTS &&
            this._actualWord != this._pickedWord) {
            location.assign("/loser");
        }
    };
    return Checker;
}());
export { Checker };
