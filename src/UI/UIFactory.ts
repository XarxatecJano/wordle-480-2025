import { IFactory } from "../Elements/Interfaces/IFactory.js";
import { UIKeyboardKey } from "./Background/UIBackgroundKey.js";
import { UIBackgroundPosition } from "./Background/UIBackgroundPosition.js";
import { StyleManager } from "./Style/StyleManager.js";
import { UIBoard } from "./UIBoard.js";
import { UIKeyboard } from "./UIKeyboard.js";

export class UIComponents {
    constructor(
        public readonly styleManager: StyleManager,
        public readonly board: UIBoard,
        public readonly keyboard: UIKeyboard
    ) {}
}

export class UIFactory implements IFactory<void, UIComponents> {

    private static _instance: UIFactory;
    
    static getInstance(): UIFactory {
        if (this._instance == null) {
            this._instance = new UIFactory();
        }
        return this._instance;
    }

    create(): UIComponents {
        let styleManager = new StyleManager();
        let backgroundPosition = new UIBackgroundPosition(styleManager);
        let backgroundKey = new UIKeyboardKey(styleManager);
        let board = new UIBoard(backgroundPosition, styleManager);
        let keyboard = new UIKeyboard(backgroundKey);
        
        return new UIComponents(styleManager, board, keyboard);
    }
    
}