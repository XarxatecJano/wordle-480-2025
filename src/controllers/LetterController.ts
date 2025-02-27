import { PositionManager } from "./PositionController";

export class Letter{
    private static _instance: Letter
    private _validLetterCodes: string[]
    private _positionManager:PositionManager
        constructor(){
            this._validLetterCodes=["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
            this._positionManager=PositionManager.getInstance();
        }
        public static getInstance(): Letter {
            if (!Letter._instance) {
                Letter._instance = new Letter();
            }
            return Letter._instance;
        }

        get validLetterCodes() {
            return this._validLetterCodes
        }
        set validLetterCodes(letters) {
            this._validLetterCodes = letters;
        }
        includes(code: string):boolean {
            return this._validLetterCodes.includes(code);
        }
        transformCodeToLetter(code: string):string{
            let letter: string = "";
            if (code=="Semicolon") letter = "Ñ";
            else letter = code.split("y")[1];
            return letter;
        }
        isEnterKey(code: string): boolean {
            return code == "Enter";
        }
    
        isBackspaceKey(code: string): boolean {
            return code == "Backspace";
        }

        isValidLetter(code: string): boolean {
            return this.includes(code) && this._positionManager.isValidPosition();
        }
    


}
