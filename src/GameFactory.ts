import { Game } from "./Game";
import { ILetterDisplay } from "./ILetterDisplay";
import { ICellStyler } from "./ICellStyler";
import { IKeyboardStyler } from "./IKeyboardStyler";
import { IWordValidator } from "./IWordValidator";
import { IInputHandler } from "./IINputHandler";
import { IGameState } from "./IGameState";
import { IWordEvaluator } from "./IWordEvaluator";
import { IWordProvider } from "./IWordProvider";
import { WordValidator } from "./WordValidator";
import { InputHandler } from "./InputHandler";
import { GameState } from "./GameState";
import { WordEvaluator } from "./WordEvaluator";
import { UIComponentsFactory } from "./UIComponentsFactory";
import { Word } from "./Word";

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
            "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"
        ];

        const inputHandler: IInputHandler = new InputHandler(validLetterCodes, 0);

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