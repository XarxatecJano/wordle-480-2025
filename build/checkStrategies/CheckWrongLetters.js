import { GameGrid } from "../controller/GameGrid.js";
import { GameKeyboard } from "../controller/GameKeyboard.js";
import { UserInterfaceController } from "../controller/UserInterfaceController.js";
import { KeyType } from "../enum/KeyType.js";
import { MAX_WORD_SIZE } from "../env.js";
var checkWrongLetters = /** @class */ (function () {
    function checkWrongLetters() {
        this.interfaceController = new UserInterfaceController();
        this.grid = new GameGrid(this.interfaceController);
        this.keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);
    }
    checkWrongLetters.prototype.check = function (gameState) {
        var actualLetter;
        var pattern;
        var numberOfCoincidencesPickedWord = 0;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = gameState.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = gameState.pickedWord.numberOfCoincidences(pattern);
            if (numberOfCoincidencesPickedWord == 0) {
                this.grid.setLetterState(gameState.turn, i, KeyType.USED);
                this.keyboard.setKeyState(actualLetter.getCode(), KeyType.USED);
            }
        }
    };
    return checkWrongLetters;
}());
export { checkWrongLetters };
