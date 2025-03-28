import { RIGHT_CELL_CSS, RIGHT_LETTER } from "../env.js";
import { UtilHTML } from "../html_css/UtilHTML.js";
import { IPanelBackground } from "../interfaces/IPanelBackground.js";
import { PanelBackground } from "./PanelBackground.js";

export class PanelBackgroundRight extends PanelBackground implements IPanelBackground{

    changeBackgroundColor( state: string , index: number ): void {
        if(state == RIGHT_LETTER){
            UtilHTML.changeBackgroundCell(this.gameManager.turn + 1, index, RIGHT_CELL_CSS)
        }
    }
}