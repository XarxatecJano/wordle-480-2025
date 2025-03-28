import { AdvancedMap } from "../../Elements/AdvancedMap.js";
import { RESULT_CLASS_LETTERS, RESULT_CLASS_POSITION } from "../../env.js";
import { IStyleManager } from "../Style/IStyleManager.js";

export class UIBackgroundPosition {
    
    private readonly _styleManager: IStyleManager
    constructor(styleManager: IStyleManager) {
        this._styleManager = styleManager;
    }

    private readonly _staticMap: AdvancedMap<RESULT_CLASS_LETTERS,RESULT_CLASS_POSITION> = new 
        AdvancedMap<RESULT_CLASS_LETTERS,RESULT_CLASS_POSITION>([
            [RESULT_CLASS_LETTERS.RIGHT, RESULT_CLASS_POSITION.GREEN],
            [RESULT_CLASS_LETTERS.MISPLACED, RESULT_CLASS_POSITION.ORANGE]
    ]);

    changeBackgroundPosition(turn: number, position: number, state: RESULT_CLASS_LETTERS){
        let positionClass = this._staticMap.get(state) ?? RESULT_CLASS_POSITION.GREY;
        const key = Array.from(this._styleManager.getElementTurn(turn)!.children)[position] as Element;
        this._styleManager.changeBackground(positionClass,key);
    }
}