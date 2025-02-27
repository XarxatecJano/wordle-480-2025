import { GameFlowManager } from "../game/GameFlowManager.js";
import { Letter } from "../game/word/Letter.js";

export class InputKeyboard {
    game: GameFlowManager;

    constructor(game: GameFlowManager) {
        this.game = game;
    };

    enterPressed(): void {
        if (this.game.wordIsMaxLength()) {
            this.game.submitWord();
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
            this.game.setNewLetter(letter);
        }
        else if (letter.isEnterKey()) {
            this.enterPressed();
        }
        else if (letter.isBackspaceKey()) {
            this.backspacePressed();
        }
    }
}