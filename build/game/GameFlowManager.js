import { MAX_WORD_SIZE } from "../env.js";
import { Word } from "./word/Word.js";
import { GameState } from "./GameState.js";
import { GameChecker } from "./GameChecker.js";
import { CheckLettersFactory } from "./word/checkLetters/CheckLettersFactory.js";
import { KeyState } from "../interface/keyboard/KeyState.js";
import { UserInterfaceController } from "../interface/UserInterfaceController.js";
import { InterfaceGrid } from "../interface/InterfaceGrid.js";
var GameFlowManager = /** @class */ (function () {
    function GameFlowManager(pickedWord) {
        this.gameState = new GameState(pickedWord);
        this.gameChecker = new GameChecker(this.gameState);
        this.userInterfaceController = new UserInterfaceController();
        this.grid = new InterfaceGrid(this.userInterfaceController);
    }
    GameFlowManager.prototype.setNewLetter = function (letter) {
        if (this.gameChecker.checkNewLetter(letter)) {
            this.grid.setNewLetter(this.gameState.turn, this.gameState.actualWord.getSize(), letter.getChar());
            this.gameState.actualWord.addLetter(letter);
        }
    };
    GameFlowManager.prototype.removeLastLetter = function () {
        this.gameState.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.gameState.turn, this.gameState.actualWord.getSize());
    };
    GameFlowManager.prototype.submitWord = function () {
        this.gameChecker.checkWordIsRight();
        this.gameChecker.checkGameIsOver();
        this.updateAfterANewWord();
    };
    GameFlowManager.prototype.updateAfterANewWord = function () {
        var checkLettersFactory = new CheckLettersFactory(this.gameState);
        checkLettersFactory.check(KeyState.RIGHT);
        checkLettersFactory.check(KeyState.MISPLACED);
        this.gameState.nextTurn();
        this.gameState.actualWord = new Word([]);
    };
    GameFlowManager.prototype.wordIsMaxLength = function () {
        return this.gameState.actualWord.getSize() === MAX_WORD_SIZE;
    };
    GameFlowManager.prototype.getWordSize = function () {
        return this.gameState.actualWord.getSize();
    };
    return GameFlowManager;
}());
export { GameFlowManager };
