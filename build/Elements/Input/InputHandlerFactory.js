import { UIFactory } from "../../UI/UIFactory.js";
import { WordComponentsFactory } from "../Word/WordComponentsFactory.js";
import { InputKeyPressed } from "./InputKeyPressed.js";
export class InputHandlerFactory {
    static getInstance() {
        if (this._instance == null) {
            this._instance = new InputHandlerFactory();
        }
        return this._instance;
    }
    create() {
        const uiComponents = UIFactory.getInstance().create();
        let wordComponents = WordComponentsFactory.getInstance().create(uiComponents);
        let inputHandler = new InputKeyPressed(uiComponents.keyboard);
        wordComponents.wordManager.letterManager = wordComponents.letterManager;
        inputHandler.letterManager = wordComponents.letterManager;
        inputHandler.turn = wordComponents.turn;
        inputHandler.actualWord = wordComponents.actualWord;
        inputHandler.wordManager = wordComponents.wordManager;
        inputHandler.initializeCommands();
        return inputHandler;
    }
}
