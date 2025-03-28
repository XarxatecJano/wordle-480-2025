import { RESULT_CLASS_LETTERS } from "../env.js";
import { UIBackgroundPosition } from "./Background/UIBackgroundPosition.js";
import { IStyleManager } from "./Style/IStyleManager.js";

export class UIBoard {

    private readonly _backgroundManager: UIBackgroundPosition;
    private readonly _styleManager: IStyleManager
    constructor (
        backgroundManager: UIBackgroundPosition,
        styleManager: IStyleManager
    ) {
        this._backgroundManager = backgroundManager;
        this._styleManager = styleManager;
    }

    setLetter(turn: number,position: number, letter: string) {
        Array.from((this._styleManager.getElementTurn(turn)!.children as HTMLCollection))[position].textContent = letter;
    }
        
    changeBackgroundPosition(turn: number, position: number, state: RESULT_CLASS_LETTERS){
        this._backgroundManager.changeBackgroundPosition(turn,position,state);
    }
}