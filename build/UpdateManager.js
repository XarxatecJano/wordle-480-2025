import { MAX_WORD_SIZE } from "./env.js";
var UpdateManager = /** @class */ (function () {
    function UpdateManager(checker) {
        this.checker = checker;
    }
    UpdateManager.prototype.updateAfterNewWord = function () {
        this.checker.checkRightLetters();
        this.checker.checkMisplacedLetters();
        this.checker.checkWrongLetters();
        this.updateActualLettersUsed();
        this.resetElementsOfLine();
    };
    UpdateManager.prototype.resetElementsOfLine = function () {
        this.checker.turn++;
        this.checker.actualPosition = 0;
        this.checker.actualWord = "";
    };
    UpdateManager.prototype.nextPosition = function () {
        this.checker.actualPosition++;
    };
    UpdateManager.prototype.updateActualLettersUsed = function () {
        if (this.checker.turn == 1) {
            this.checker.actualLetters = this.checker.actualWord;
        }
        else {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (!this.checker.actualLetters[i].includes(this.checker.actualWord[i])) {
                    this.checker.actualLetters += this.checker.actualWord[i];
                }
            }
        }
    };
    return UpdateManager;
}());
export { UpdateManager };
