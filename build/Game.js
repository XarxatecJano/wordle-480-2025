import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { Interface } from "./Interface.js";
import { Letra } from "./Letra.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        var _this = this;
        this.checkRightLetters = function () {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (_this._pickedWord[i] == _this._actualWord[i].valor) {
                    _this._actualWord[i].setEstadoCorrecta();
                    _this._interface.changeBackgroundPosition(_this._turn, i, "rightLetter");
                }
            }
        };
        this.updateAfterANewWord = function () {
            _this.checkRightLetters();
            _this.checkMisplacedLetters();
            _this.checkWrongLetters();
            _this._turn = _this._turn + 1;
            _this._actualPosition = 0;
            _this._actualWord = [];
        };
        this._pickedWord = pickedWord;
        this._actualWord = [];
        this._turn = 1;
        this._actualPosition = 0;
        this._validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this._interface = new Interface();
    }
    Object.defineProperty(Game.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        set: function (word) {
            this._pickedWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (num) {
            this._turn = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualPosition", {
        get: function () {
            return this._actualPosition;
        },
        set: function (num) {
            this._actualPosition = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "validLetterCodes", {
        get: function () {
            return this._validLetterCodes;
        },
        set: function (letters) {
            this._validLetterCodes = letters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (i) {
            this._interface = i;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.isValidLetter = function (code) {
        return this._validLetterCodes.includes(code) && this._actualPosition < MAX_WORD_SIZE;
    };
    Game.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Game.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    Game.prototype.transformCodeToLetter = function (code) {
        var letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    };
    Game.prototype.newLetter = function (code) {
        var letterValue = this.transformCodeToLetter(code);
        var letter = new Letra(letterValue);
        this._interface.setNewLetter(this.turn, this.actualPosition, letter.valor);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord.push(letter);
    };
    Game.prototype.checkWordIsRight = function () {
        if (this._actualWord.map(function (l) { return l.valor; }).join("") === this._pickedWord) {
            location.assign("/winner");
        }
    };
    Game.prototype.checkMisplacedLetters = function () {
        var letterCounts = {};
        for (var _i = 0, _a = this._pickedWord; _i < _a.length; _i++) {
            var letter = _a[_i];
            letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        }
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var actualLetter = this._actualWord[i].valor;
            if (this._actualWord[i].esCorrecta())
                continue;
            if (this._pickedWord.includes(actualLetter) && letterCounts[actualLetter] > 0) {
                this._actualWord[i].setEstadoMalColocada();
                this._interface.changeBackgroundPosition(this._turn, i, "misplacedLetter");
                letterCounts[actualLetter]--;
            }
        }
    };
    Game.prototype.checkWrongLetters = function () {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (!this._pickedWord.includes(this._actualWord[i].valor) && !this._actualWord[i].esCorrecta()) {
                this._actualWord[i].setEstadoIncorrecta();
                this._interface.changeBackgroundPosition(this._turn, i, "wrongLetter");
            }
        }
    };
    Game.prototype.checkGameIsOver = function () {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    };
    Game.prototype.enterPressed = function () {
        if (this._actualWord.length !== MAX_WORD_SIZE)
            return;
        this.checkWordIsRight();
        if (this._actualWord.map(function (l) { return l.valor; }).join("") === this._pickedWord)
            return;
        this.checkGameIsOver();
        if (this.turn >= MAX_ATTEMPTS)
            return;
        this.updateAfterANewWord();
    };
    Game.prototype.backspacePressed = function () {
        if (this._actualPosition > 0) {
            this._actualPosition -= 1;
            this._interface.deleteLetter(this._turn, this._actualPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        if (this.isValidLetter(code))
            this.newLetter(code);
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
        this._interface.changeBackgroundKey(code);
    };
    return Game;
}());
export { Game };
