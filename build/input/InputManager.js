import { MAX_WORD_SIZE } from "../env.js";
var InputManager = /** @class */ (function () {
    function InputManager(game, visualManager, wordManager, gameStatusManager) {
        this.gameManager = game;
        this._visualManager = visualManager;
        this._wordManager = wordManager;
        this._gameStatusManager = gameStatusManager;
    }
    InputManager.prototype.enterPressed = function () {
        if (this.wordManager.actualWord(this.game.turn).Letters.length == MAX_WORD_SIZE) {
            var wordCheck = this.wordManager.update(this.game.turn);
            this.visualManager.updateInterface(wordCheck, this.game.turn);
            this.visualManager.board.deleteFocus();
            this.game.addTurn();
            this.gameStatusManager.checkStatus();
        }
    };
    InputManager.prototype.backPressed = function () {
        var actualWord = this.wordManager.actualWord(this.game.turn);
        if (this.wordManager.words[this.game.turn].Letters.length > 0) {
            var words = this._wordManager.allWords();
            var letter = this.wordManager.actualLetterString(this.gameManager.turn);
            this.visualManager.board.deleteBackgroundKey(letter, words);
            this.visualManager.panel.deleteLetter(this.game.turn + 1, actualWord.Letters.length - 1);
            actualWord.removeLetter();
        }
    };
    InputManager.prototype.keyPressed = function (code) {
        if (this.wordManager.actualWord(this.game.turn).Letters.length < MAX_WORD_SIZE) {
            this.wordManager.newLetter(this.game.turn, code);
            this.visualManager.panel.setNewLetter(this.game.turn + 1, this.wordManager.actualWordLength(this.game.turn) - 1, code);
            this.visualManager.board.setBackgroundKey(code);
        }
    };
    Object.defineProperty(InputManager.prototype, "game", {
        get: function () { return this.gameManager; },
        set: function (value) { this.gameManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "visualManager", {
        get: function () { return this._visualManager; },
        set: function (value) { this._visualManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "wordManager", {
        get: function () { return this._wordManager; },
        set: function (value) { this._wordManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "gameStatusManager", {
        get: function () { return this._gameStatusManager; },
        set: function (value) { this._gameStatusManager = value; },
        enumerable: false,
        configurable: true
    });
    return InputManager;
}());
export { InputManager };
