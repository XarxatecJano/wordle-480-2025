import { MAX_WORD_SIZE } from "./env.js";
import { Word } from "./model/Word.js";
import { GameState } from "./model/GameState.js";
import { GameChecker } from "./utils/WordChecker.js";
import { CheckLettersFactory } from "./CheckLettersFactory.js";
import { KeyType } from "./enum/KeyType.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        var _this = this;
        this.updateAfterANewWord = function () {
            CheckLettersFactory.check(_this.gameState, KeyType.RIGHT);
            CheckLettersFactory.check(_this.gameState, KeyType.MISPLACED);
            CheckLettersFactory.check(_this.gameState, KeyType.USED);
            _this.gameState.nextTurn();
            _this.gameState.actualWord = new Word([]);
        };
        this.gameState = new GameState(pickedWord);
        this.gameChecker = new GameChecker(this.gameState);
    }
    Game.prototype.getGameChecker = function () {
        return this.gameChecker;
    };
    Game.prototype.setNewLetter = function (letter) {
        this.gameChecker.setNewLetter(letter);
    };
    Game.prototype.wordIsMaxLength = function () {
        if (this.gameState.actualWord.getSize() == MAX_WORD_SIZE)
            return true;
        return false;
    };
    Game.prototype.getWordSize = function () {
        return this.gameState.actualWord.getSize();
    };
    Game.prototype.removeLastLetter = function () {
        this.gameChecker.removeLastLetter();
    };
    return Game;
}());
export { Game };
