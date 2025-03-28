import { MISPLACE_CELL_CSS, MISPLACE_LETTER } from "../env.js";
import { UtilHTML } from "../html_css/UtilHTML.js";
import { IPanelBackground } from "../interfaces/IPanelBackground.js";
import { PanelBackground } from "./PanelBackground.js";

export class PanelBackgroundMisplace extends PanelBackground implements IPanelBackground{

    changeBackgroundColor( state: string , index: number ): void {
        if(state == MISPLACE_LETTER){
            UtilHTML.changeBackgroundCell(this.gameManager.turn + 1, index, MISPLACE_CELL_CSS)
        }
    }
}