import { GameGrid } from "../../../interface/GameGrid.js";
import { GameKeyboard } from "../../../interface/GameKeyboard.js";
import { UserInterfaceController } from "../../../interface/UserInterfaceController.js";
import { KeyType } from "../../../interface/keyboard/KeyType.js";
import { MAX_WORD_SIZE } from "../../../env.js";
var checkRightLetters = /** @class */ (function () {
    function checkRightLetters() {
        this.interfaceController = new UserInterfaceController();
        this.grid = new GameGrid(this.interfaceController);
        this.keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);
    }
    checkRightLetters.prototype.check = function (gameState) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var state = gameState.pickedWord.checkLetter(gameState.actualWord.getLetterAtIndex(i), i);
            if (state == KeyType.RIGHT) {
                this.grid.setLetterState(gameState.turn, i, KeyType.RIGHT);
                this.keyboard.setKeyState(gameState.pickedWord.getLetterAtIndex(i).getCode(), KeyType.RIGHT);
            }
        }
    };
    return checkRightLetters;
}());
export { checkRightLetters };
