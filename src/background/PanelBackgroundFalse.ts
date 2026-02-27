import { WRONG_CELL_CSS, WRONG_LETTER } from "../env.js";
import { UtilHTML } from "../html_css/UtilHTML.js";
import { IPanelBackground } from "../interfaces/IPanelBackground.js";
import { PanelBackground } from "./PanelBackground.js";

export class PanelBackgroundFalse extends PanelBackground implements IPanelBackground{
    
    changeBackgroundColor( state: string , index: number ): void {
        if(state == WRONG_LETTER){
            UtilHTML.changeBackgroundCell(this.gameManager.turn + 1, index, WRONG_CELL_CSS)
        }
    } 
}