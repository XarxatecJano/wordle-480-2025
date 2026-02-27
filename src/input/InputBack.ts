import { BACKESPACE } from "../env.js";
import { IInput } from "../interfaces/IInput.js";
import { Input } from "./Input.js";

export class InputBack extends Input implements IInput{

    OnPress(code: string): void {
        if(code == BACKESPACE){
            if (this.wordManager.actualWord().actuallength() > 0) {
                const words = this.wordManager.allLetters()
                const letter = this.wordManager.actualWord().actualLetter()
                this.visualManager.board.deleteBoardKeyBackground(letter, words)
                this.visualManager.panel.deleteLetter(this.gameManager.turn + 1, this.gameManager.position - 1);
                this.wordManager.actualWord().removeLetter();
                this.gameManager.removePosition();
            }
        }  
    }
}