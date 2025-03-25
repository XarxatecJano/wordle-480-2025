import { Game } from "./Game.js";
import { ILetterDisplay } from "./ILetterDisplay.js";
import { ICellStyler } from "./ICellStyler.js";
import { IKeyboardStyler } from "./IKeyboardStyler.js";
import { IWordValidator } from "./IWordValidator.js";
import { KeyboardInputHandler } from "./KeyboardInputHandler.js";
import { IGameState } from "./IGameState.js";
import { IWordEvaluator } from "./IWordEvaluator.js";
import { IWordProvider } from "./IWordProvider.js";
import { WordValidator } from "./WordValidator.js";
import { InputHandler } from "./InputHandler.js";
import { GameState } from "./GameState.js";
import { WordEvaluator } from "./WordEvaluator.js";
import { UIComponentsFactory } from "./UIComponentsFactory.js";
import { Word } from "./Word.js";

export class GameFactory {
    static createGame(words: string[]): Game {
        const wordProvider: IWordProvider = new Word(words)
        const targetWord = wordProvider.getRandomWord();

        const domAccess = UIComponentsFactory.createDOMAccess();
        const letterDisplay = UIComponentsFactory.createLetterDisplay(domAccess);
        const cellStyler = UIComponentsFactory.createCellStyler(domAccess);
        const keyboardStyler = UIComponentsFactory.createKeyboardStyler(domAccess);

        const wordValidator: IWordValidator = new WordValidator();

        const gameState: IGameState = new GameState();

        const validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", 
            "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", 
            "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", 
            "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon",
            
        ];

        const inputHandler: KeyboardInputHandler = new InputHandler(validLetterCodes, 0);

        const wordEvaluator: IWordEvaluator = new WordEvaluator();

        return new Game(
            targetWord,
            letterDisplay,
            cellStyler,
            keyboardStyler,
            wordValidator,
            inputHandler,
            gameState,
            wordEvaluator
        );
    }
}