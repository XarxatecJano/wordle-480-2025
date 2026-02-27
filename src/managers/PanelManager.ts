import { IPanelBackground } from "../interfaces/IPanelBackground.js";
import { UtilHTML } from "../html_css/UtilHTML.js";

export class PanelManager{
    
    private _backgrounds : IPanelBackground[]

    constructor(backgrounds: IPanelBackground[]){
        this._backgrounds = backgrounds;
    }
    
    setNewLetter(turn: number, position: number, letter: string) {
        if(letter == "Semicolon"){ letter = "Ñ" }
        UtilHTML.changeTextContentCell(turn, position, letter)
    }

    deleteLetter(turn: number, position: number) {
        UtilHTML.changeTextContentCell(turn, position, "")
    }
    
    changeCellsBackground(state: string , index: number ){
        this.backgrounds.forEach(element => {
            element.changeBackgroundColor(state, index); 
        });
    }

    get backgrounds(){return this._backgrounds}
    set backgrounds(value){this._backgrounds = value}
}