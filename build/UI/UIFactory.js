import { UIKeyboardKey } from "./Background/UIBackgroundKey.js";
import { UIBackgroundPosition } from "./Background/UIBackgroundPosition.js";
import { StyleManager } from "./Style/StyleManager.js";
import { UIBoard } from "./UIBoard.js";
import { UIKeyboard } from "./UIKeyboard.js";
export class UIComponents {
    constructor(styleManager, board, keyboard) {
        this.styleManager = styleManager;
        this.board = board;
        this.keyboard = keyboard;
    }
}
export class UIFactory {
    static getInstance() {
        if (this._instance == null) {
            this._instance = new UIFactory();
        }
        return this._instance;
    }
    create() {
        let styleManager = new StyleManager();
        let backgroundPosition = new UIBackgroundPosition(styleManager);
        let backgroundKey = new UIKeyboardKey(styleManager);
        let board = new UIBoard(backgroundPosition, styleManager);
        let keyboard = new UIKeyboard(backgroundKey);
        return new UIComponents(styleManager, board, keyboard);
    }
}
