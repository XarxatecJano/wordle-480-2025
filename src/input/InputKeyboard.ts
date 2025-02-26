import { Game } from "../Game.js";
import { Letter } from "../model/Letter.js";
import { GameChecker } from "../utils/WordChecker.js";
import { MAX_WORD_SIZE } from "../env.js";

export class InputKeyboard {
    game: Game;
    gameChecker: GameChecker;

    constructor(game: Game) {
        this.game = game;
        this.gameChecker = game.getGameChecker();
    };

    addNewLetter(letter: Letter) {
        this.game.setNewLetter(letter);
    }

    enterPressed(): void {
        if (this.game.wordIsMaxLength()) {
            this.game.updateAfterANewWord();
        }
    }

    backspacePressed(): void {
        if (this.game.getWordSize() > 0) {
            this.game.removeLastLetter();
        }
    }

    newKeyPressed(code: string): void {
        const letter = new Letter(code);
        if (letter.isValidLetter()) {
            this.addNewLetter(letter);
        }
        else if (letter.isEnterKey()) {
            this.enterPressed();
        }
        else if (letter.isBackspaceKey()) {
            this.backspacePressed();
        }
    }
}