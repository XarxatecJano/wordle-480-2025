var UpdateManager = /** @class */ (function () {
    function UpdateManager(checker) {
        this.checker = checker;
    }
    UpdateManager.getInstance = function (checker) {
        if (!UpdateManager._instance) {
            UpdateManager._instance = new UpdateManager(checker);
        }
        return UpdateManager._instance;
    };
    UpdateManager.prototype.updateAfterNewWord = function () {
        this.checker.checkRightLetters();
        this.checker.checkMisplacedLetters();
        this.checker.checkWrongLetters();
        this.resetElementsOfLine();
    };
    UpdateManager.prototype.resetElementsOfLine = function () {
        this.checker.turn++;
        this.checker.currentPosition = 0;
        this.checker.actualWord = "";
    };
    UpdateManager.prototype.nextPosition = function () {
        this.checker.currentPosition++;
    };
    return UpdateManager;
}());
export { UpdateManager };
