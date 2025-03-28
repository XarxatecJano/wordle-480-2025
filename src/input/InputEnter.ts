import { CheckTypeManager } from "../managers/CheckTypeManager.js";
import { ENTER, MAX_WORD_SIZE } from "../env.js";
import { GameManager } from "../managers/GameManager.js";
import { GameStatusManager } from "../managers/GameStatusManager.js";
import { VisualManager } from "../managers/VisualManager.js";
import { WordManager } from "../managers/WordManager.js";
import { IInput } from "../interfaces/IInput.js";
import { Input } from "./Input.js";

export class InputEnter extends Input implements IInput{
    
    private _gameStatusManager: GameStatusManager
    private _checkTypeManager: CheckTypeManager

    constructor(
        gameManager: GameManager, 
        visualManager: VisualManager, 
        wordManager: WordManager, 
        gameStatusManager: GameStatusManager, 
        checkTypeManager: CheckTypeManager
    ){
        super( gameManager, visualManager, wordManager )
        this._gameStatusManager = gameStatusManager
        this._checkTypeManager = checkTypeManager
    }

    OnPress(code: string): void {
        if(code == ENTER){
            if (this.wordManager.actualWord().actuallength() == MAX_WORD_SIZE){
                let wordCheck : number[] = new Array(MAX_WORD_SIZE)
                this.checkTypeManager.executeChecks( wordCheck )
                this.visualManager.updateInterface( wordCheck )
                this.visualManager.board.deleteBoardKeyFocus()
                this.gameStatusManager.checkStatus()
                this.wordManager.newEmptyWord()
                this.gameManager.setNewTurn()
            }
        }
    }

    get gameStatusManager(){return this._gameStatusManager}
    set gameStatusManager(value: GameStatusManager){this._gameStatusManager = value}

    get checkTypeManager(){ return this._checkTypeManager }
    set checkTypeManager(value: CheckTypeManager){ this._checkTypeManager = value }
}