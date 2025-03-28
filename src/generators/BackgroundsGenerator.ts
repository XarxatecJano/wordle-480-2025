import { PanelBackgroundFalse } from "../background/PanelBackgroundFalse.js";
import { PanelBackgroundMisplace } from "../background/PanelBackgroundMisplace.js";
import { PanelBackgroundRight } from "../background/PanelBackgroundRIght.js";
import { IPanelBackground } from "../interfaces/IPanelBackground.js";
import { GameManager } from "../managers/GameManager.js";
import { IGenerator } from "../interfaces/IGenerator.js";

export class BackgroundGenerator implements IGenerator<GameManager, IPanelBackground[]>{
    
    generate(parameter: GameManager): IPanelBackground[] {
        const backgroundRight = new PanelBackgroundRight(parameter);
        const backgroundFalse = new PanelBackgroundFalse(parameter);
        const backgroundMisplace = new PanelBackgroundMisplace(parameter);
        const backgrounds: IPanelBackground[] = [];
        backgrounds.push(backgroundRight);
        backgrounds.push(backgroundMisplace);
        backgrounds.push(backgroundFalse);
        return backgrounds
    }
   
}