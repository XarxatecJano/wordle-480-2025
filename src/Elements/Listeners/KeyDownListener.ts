import { InputKeyPressed } from "../Input/InputKeyPressed";
import { IListener } from "../Interfaces/IListener";

export class KeyDownListener implements IListener {

    private readonly _inputHandler: InputKeyPressed;
    constructor(inputHandler: InputKeyPressed) {
        this._inputHandler = inputHandler;
    }

    listen(callback?: string): void {
        document.addEventListener("keydown", (e)=>{
            this._inputHandler.newKeyPressed(e.code);
        });
    }
    
}