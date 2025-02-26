import { MAX_ATTEMPTS } from "./env.js";
var EndGame = /** @class */ (function () {
    function EndGame(wordTry, pickedWord, turn) {
        this._wordTry = wordTry;
        this._pickedWord = pickedWord;
        this._turn = turn;
    }
    EndGame.prototype.checkIfLost = function () {
        if (this._turn == MAX_ATTEMPTS && this._pickedWord != this._wordTry) {
            location.assign("/loser");
        }
    };
    EndGame.prototype.checkIfWon = function () {
        if (this._wordTry == this._pickedWord) {
            location.assign("/winner");
        }
    };
    EndGame.prototype.endGameScreen = function () {
        this.checkIfWon();
        this.checkIfLost();
    };
    return EndGame;
}());
export { EndGame };
