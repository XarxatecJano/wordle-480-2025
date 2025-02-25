import { Game } from "../Game.js";
import { Letter } from "../model/Letter.js";
import { GameKeyboard } from "../controller/GameKeyboard.js";

export class InputKeyboard {
    game: Game;
    constructor(game: Game) {
        this.game = game;
    };

    addNewLetter(letter: Letter) {
        this.game.setNewLetter(letter);
    }

    enterPressed(): void {
        if (this.game.wordIsComplete()) {
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
        if (this.game.isValidLetter(letter)) {
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