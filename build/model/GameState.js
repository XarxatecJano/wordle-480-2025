import { Word } from "./Word.js";
import { MAX_ATTEMPTS } from "../env.js";
var GameState = /** @class */ (function () {
    function GameState(pickedWord) {
        this._pickedWord = pickedWord;
        this._actualWord = new Word([]);
        this._turn = 1;
    }
    GameState.prototype.nextTurn = function () {
        this._turn++;
    };
    Object.defineProperty(GameState.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    GameState.prototype.checkWordIsRight = function () {
        if (this.actualWord.equals(this.pickedWord)) {
            location.assign("/winner");
        }
    };
    GameState.prototype.checkGameIsOver = function () {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    };
    return GameState;
}());
export { GameState };
