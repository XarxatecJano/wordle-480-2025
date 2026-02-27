import { MAX_WORD_SIZE, SEMICOLON } from "../env.js";
import { Util } from "../util.js";
import { IInput } from "../interfaces/IInput.js";
import { Input } from "./Input.js";
import { GameManager } from "../managers/GameManager.js";
import { VisualManager } from "../managers/VisualManager.js";
import { WordManager } from "../managers/WordManager.js";

export class InputKey extends Input implements IInput{
    
    private readonly _validLetterCodes: string[];

    constructor( 
        validLetterCodes: string[],
        gameManager: GameManager,
        visualManager: VisualManager,
        wordManager: WordManager
    ){
        super(gameManager, visualManager, wordManager)
        this._validLetterCodes = validLetterCodes
    }

    OnPress(code: string): void{
        if(this._validLetterCodes.includes(code)){
            if(code != SEMICOLON){ code = Util.transformCodeToLetter(code, "y") }
            if(this.wordManager.actualWord().actuallength() < MAX_WORD_SIZE){
                this.wordManager.actualWord().addLetter(code)
                this.gameManager.addPosition()
                this.visualManager.panel.setNewLetter(this.gameManager.turn + 1, this.wordManager.actualWordLength() -1, code);
                this.visualManager.board.setBoardKeyBackground(code)
            }
        }
    }

}