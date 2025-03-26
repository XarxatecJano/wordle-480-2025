var Game = /** @class */ (function () {
    function Game(pickedWord, ui, inputManager, wordValidator, resultManager, maxAttempts, maxWordSize) {
        this.actualWord = "";
        this.turn = 1;
        this.position = 0;
        this.pickedWord = pickedWord;
        this.ui = ui;
        this.inputManager = inputManager;
        this.wordValidator = wordValidator;
        this.resultManager = resultManager;
        this.maxAttempts = maxAttempts;
        this.maxWordSize = maxWordSize;
    }
    Game.prototype.newKeyPressed = function (code) {
        // Si es letra válida
        if (this.inputManager.isValidLetter(code, this.position, this.maxWordSize)) {
            var letter = this.inputManager.transformCodeToLetter(code);
            this.ui.setNewLetter(this.turn, this.position, letter);
            this.actualWord += letter;
            this.position++;
        }
        // Si se pulsa ENTER
        if (this.inputManager.isEnterKey(code)) {
            if (this.actualWord.length === this.maxWordSize) {
                if (this.resultManager.checkVictory(this.actualWord, this.pickedWord)) {
                    this.resultManager.handleVictory();
                }
                else if (this.turn === this.maxAttempts) {
                    this.resultManager.handleGameOver();
                }
                else {
                    this.wordValidator.checkWord(this.actualWord, this.pickedWord, this.turn, this.ui);
                    this.turn++;
                    this.position = 0;
                    this.actualWord = "";
                }
            }
        }
        // Si se pulsa BACKSPACE
        if (this.inputManager.isBackspaceKey(code) && this.position > 0) {
            this.position--;
            this.actualWord = this.actualWord.slice(0, -1);
            this.ui.deleteLetter(this.turn, this.position);
        }
        // Cambiar color de tecla
        this.ui.changeKeyColor(code);
    };
    return Game;
}());
export { Game };
