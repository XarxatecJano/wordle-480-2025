import { InputKeyPressed } from "../Input/InputKeyPressed.js";
import { IListener } from "../Interfaces/IListener.js";

export class ClickListener implements IListener {
    
    public static readonly CALLBACK: string = "click";

    private readonly _inputHandler: InputKeyPressed;
    constructor(inputHandler: InputKeyPressed) {
        this._inputHandler = inputHandler;
    }

    listen(callback: string): void {
        Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener(callback, (e)=>{
            this._inputHandler.newKeyPressed((<HTMLButtonElement>e.target).value);
        }));
    }
    
}