import { Interface } from "./Interface.js";
import { Key } from "./Key.js";
import { WordTry } from "./WordTry.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        this._pickedWord = pickedWord;
        this._interface = new Interface();
        var letterHistory = new Set();
        this._actualWord = new WordTry(pickedWord, 1, letterHistory, this._interface);
        this._key = new Key();
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
    Object.defineProperty(Game.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (interface0) {
            this._interface = interface0;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.newKeyPressed = function (code) {
        if (this._key.isValidLetter(code))
            this._actualWord.addLetterIfPossible(code);
        if (this._key.isEnterKey(code))
            this._actualWord.enterPressed();
        if (this._key.isBackspaceKey(code))
            this._actualWord.deleteLetterIfPossible();
    };
    return Game;
}());
export { Game };
