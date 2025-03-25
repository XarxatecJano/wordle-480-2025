import { Game } from "./Game.js";
import { WordValidator } from "./WordValidator.js";
import { InputHandler } from "./InputHandler.js";
import { GameState } from "./GameState.js";
import { WordEvaluator } from "./WordEvaluator.js";
import { UIComponentsFactory } from "./UIComponentsFactory.js";
import { Word } from "./Word.js";
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.createGame = function (words) {
        var wordProvider = new Word(words);
        var targetWord = wordProvider.getRandomWord();
        var domAccess = UIComponentsFactory.createDOMAccess();
        var letterDisplay = UIComponentsFactory.createLetterDisplay(domAccess);
        var cellStyler = UIComponentsFactory.createCellStyler(domAccess);
        var keyboardStyler = UIComponentsFactory.createKeyboardStyler(domAccess);
        var wordValidator = new WordValidator();
        var gameState = new GameState();
        var validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU",
            "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF",
            "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX",
            "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon",
        ];
        var inputHandler = new InputHandler(validLetterCodes, 0);
        var wordEvaluator = new WordEvaluator();
        return new Game(targetWord, letterDisplay, cellStyler, keyboardStyler, wordValidator, inputHandler, gameState, wordEvaluator);
    };
    return GameFactory;
}());
export { GameFactory };
