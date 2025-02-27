import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "../env.js";
import { KeyType } from "../enum/KeyType.js";
import { UserInterfaceController } from "../controller/UserInterfaceController.js";
import { GameKeyboard } from "../controller/GameKeyboard.js";
import { GameGrid } from "../controller/GameGrid.js";
var GameChecker = /** @class */ (function () {
    function GameChecker(gameState) {
        this.gameState = gameState;
        this.interface = new UserInterfaceController();
        this.keyboard = new GameKeyboard(this.interface);
        this.grid = new GameGrid(this.interface);
    }
    GameChecker.prototype.isValidLetter = function (letter) {
        if (letter.isValidLetter() && this.gameState.actualWord.getSize() < MAX_WORD_SIZE) {
            return true;
        }
        return false;
    };
    GameChecker.prototype.setNewLetter = function (letter) {
        this.grid.setNewLetter(this.gameState.turn, this.gameState.actualWord.getSize(), letter.getChar());
        this.gameState.actualWord.addLetter(letter);
        console.log(this.gameState.actualWord.getWordString());
    };
    GameChecker.prototype.removeLastLetter = function () {
        this.gameState.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.gameState.turn, this.gameState.actualWord.getSize());
    };
    GameChecker.prototype.highlightLetters = function () {
        for (var _i = 0, _a = this.gameState.actualWord.getLetters(); _i < _a.length; _i++) {
            var letter = _a[_i];
            this.keyboard.setKeyState(letter.getCode(), KeyType.USED);
        }
    };
    GameChecker.prototype.checkWordIsRight = function () {
        if (this.gameState.actualWord.equals(this.gameState.pickedWord)) {
            this.gameState.callWin();
        }
    };
    GameChecker.prototype.checkGameIsOver = function () {
        if (this.gameState.turn == MAX_ATTEMPTS) {
            this.gameState.callGameOver();
        }
    };
    return GameChecker;
}());
export { GameChecker };
