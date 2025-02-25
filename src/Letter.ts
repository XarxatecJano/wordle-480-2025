export class Letter{
    private _validLetterCodes: string[]
        constructor(){
            this._validLetterCodes=["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
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

        
      /*  newLetter(code: string):void{
            let letter: string = this._validLetterCodes.transformCodeToLetter(code);
            this._interface.setNewLetter(this.turn, this.actualPosition, letter);
            this._actualPosition = this._actualPosition + 1;
            this._actualWord += letter;
        }

        */

}
