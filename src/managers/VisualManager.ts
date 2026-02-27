import { WRONG_LETTER, MISPLACE_LETTER, RIGHT_LETTER, RIGHT, MISPLACE, WRONG } from "../env.js"
import { BoardManager } from "./BoardManager.js"
import { PanelManager } from "./PanelManager.js"

export class VisualManager{

    private _panel: PanelManager
    private _board: BoardManager

    constructor( panel: PanelManager , board: BoardManager ){
        this._panel = panel
        this._board = board
    }

    updateInterface( word: number[] ){
        for(let i=0 ; i< word.length ; i++){
            let type = word[i]
            if(type == RIGHT){ this.panel.changeCellsBackground( RIGHT_LETTER , i ) }
            else if(type == MISPLACE){ this.panel.changeCellsBackground( MISPLACE_LETTER , i )}
            else if(type == WRONG){ this.panel.changeCellsBackground( WRONG_LETTER , i )}
        }
    }

    get panel(){ return this._panel }
    set panel( value: PanelManager ){ this._panel = value }

    get board(){ return this._board }
    set board( value: BoardManager ){ this._board = value }
}