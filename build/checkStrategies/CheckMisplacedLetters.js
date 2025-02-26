import { GameGrid } from "../controller/GameGrid.js";
import { GameKeyboard } from "../controller/GameKeyboard.js";
import { UserInterfaceController } from "../controller/UserInterfaceController.js";
import { KeyType } from "../enum/KeyType.js";
import { MAX_WORD_SIZE } from "../env.js";
var checkMisplacedLetters = /** @class */ (function () {
    function checkMisplacedLetters() {
        this.interfaceController = new UserInterfaceController();
        this.grid = new GameGrid(this.interfaceController);
        this.keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);
    }
    checkMisplacedLetters.prototype.check = function (gameState) {
        var actualLetter;
        var pattern;
        var numberOfCoincidencesPickedWord = 0;
        var numberOfCoincidencesActualWord = 0;
        var differenceOfCoincidences = 0;
        var isMisplacedLetter = true;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = gameState.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = gameState.pickedWord.numberOfCoincidences(pattern);
            numberOfCoincidencesActualWord = gameState.actualWord.numberOfCoincidences(pattern);
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if ( /*differenceOfCoincidences == 0^ &&*/gameState.pickedWord.getLetterAtIndex(i).equals(gameState.actualWord.getLetterAtIndex(i))) {
                isMisplacedLetter = false;
                continue;
            }
            if (differenceOfCoincidences >= 1) {
                for (var j = 0; j < MAX_WORD_SIZE; j++) {
                    console.log('MISPLACED | gameState.pickedWord.getLetterAtIndex(j): %s', gameState.pickedWord.getLetterAtIndex(j).getChar());
                    if (gameState.pickedWord.getLetterAtIndex(j).equals(actualLetter)) {
                        console.log('MISPLACED | Misplaced and wrong %s', actualLetter.getChar());
                        isMisplacedLetter = false;
                        this.grid.setLetterState(gameState.turn, i, KeyType.USED);
                        this.keyboard.setKeyState(actualLetter.getCode(), KeyType.USED);
                        continue;
                    }
                }
            }
            if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                console.log('Misplaced %s', actualLetter.getChar());
                this.grid.setLetterState(gameState.turn, i, KeyType.MISPLACED);
                this.keyboard.setKeyState(actualLetter.getCode(), KeyType.MISPLACED);
            }
        }
    };
    return checkMisplacedLetters;
}());
export { checkMisplacedLetters };
