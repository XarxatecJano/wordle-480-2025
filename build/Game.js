import { MAX_ATTEMPTS } from "./env.js";
var Game = /** @class */ (function () {
    function Game(targetWord, letterDisplay, cellStyler, keyboardStyler, wordValidator, inputHandler, gameState, wordEvaluator) {
        this.targetWord = targetWord,
            this.letterDisplay = letterDisplay,
            this.cellStyler = cellStyler,
            this.keyboardStyler = keyboardStyler;
        this.wordValidator = wordValidator,
            this.inputHandler = inputHandler,
            this.gameState = gameState,
            this.wordEvaluator = wordEvaluator;
    }
    Game.prototype.newKeyPressed = function (code) {
        this.inputHandler.setCurrentPosition(this.gameState.getPosition());
        if (this.inputHandler.isValidLetter(code)) {
            this.handleLetter(code);
        }
        else if (this.inputHandler.isEnterKey(code)) {
            this.handleEnter();
        }
        else if (this.inputHandler.isBackspaceKey(code)) {
            this.handleBackSpace();
        }
        this.keyboardStyler.highlightKey(code);
    };
    Game.prototype.handleLetter = function (code) {
        var letter = this.inputHandler.transformCodeToLetter(code);
        var turn = this.gameState.getTurn();
        var position = this.gameState.getPosition();
        this.letterDisplay.setLetter(turn, position, letter);
        this.gameState.setPosition(position + 1);
        this.gameState.setCurrentWord(this.gameState.getCurrentWord() + letter);
    };
    Game.prototype.handleEnter = function () {
        var currentWord = this.gameState.getCurrentWord();
        if (this.wordValidator.isComplete(currentWord)) {
            this.checkWordStatus();
            this.updateGameState();
        }
    };
    Game.prototype.checkWordStatus = function () {
        var currentWord = this.gameState.getCurrentWord();
        if (this.wordValidator.isCorrect(currentWord, this.targetWord)) {
            location.assign("/winner");
            return;
        }
        if (this.gameState.isGameOver(MAX_ATTEMPTS)) {
            location.assign("/loser");
            return;
        }
    };
    Game.prototype.updateGameState = function () {
        var _this = this;
        var turn = this.gameState.getTurn();
        var currentWord = this.gameState.getCurrentWord();
        var rightPositions = this.wordEvaluator.checkRightLetters(currentWord, this.targetWord);
        var misplacedPositions = this.wordEvaluator.checkMisplacedLetters(currentWord, this.targetWord);
        var wrongPositions = this.wordEvaluator.checkWrongLetters(currentWord, this.targetWord);
        rightPositions.forEach(function (position) {
            _this.cellStyler.applyCellStyle(turn, position, "rightLetter");
        });
        misplacedPositions.forEach(function (position) {
            _this.cellStyler.applyCellStyle(turn, position, "misplacedLetter");
        });
        wrongPositions.forEach(function (position) {
            _this.cellStyler.applyCellStyle(turn, position, "wrongLetter");
        });
        this.gameState.incrementTurn();
        this.gameState.setPosition(0);
        this.gameState.setCurrentWord("");
    };
    Game.prototype.handleBackSpace = function () {
        var position = this.gameState.getPosition();
        if (position > 0) {
            var newPosition = position - 1;
            this.gameState.setPosition(newPosition);
            var turn = this.gameState.getTurn();
            this.letterDisplay.clearLetter(turn, newPosition);
            var currentWord = this.gameState.getCurrentWord();
            this.gameState.setCurrentWord(currentWord.slice(0, -1));
        }
    };
    return Game;
}());
export { Game };
