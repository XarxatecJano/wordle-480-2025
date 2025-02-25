export class Letter{
    private _validLetterCodes: string[]

    //private _actualPosition: number


        constructor(){
            this._validLetterCodes=["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
  //          this._actualPosition = 0;
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

          checkRightLetters = ():void=>{
                for(let i=0; i<MAX_WORD_SIZE; i++){
                    if (this._pickedWord[i]==this._actualWord[i]){
                        this._interface.changeBackgroundPosition(this._turn, i, "rightLetter");
                    }
                }
            }
          checkMisplacedLetters = ():void=> {
                let actualLetter: string = "";
                let pattern: RegExp;
                let numberOfCoincidences: number = 0;
                let isMisplacedLetter: boolean;
                for (let i=0; i<MAX_WORD_SIZE; i++){
                    isMisplacedLetter = true;
                    actualLetter = this._actualWord[i];
                    pattern = new RegExp(actualLetter,"g");
                    numberOfCoincidences = (this._pickedWord.match(pattern)||[]).length;
                    if (this._pickedWord[i]==this._actualWord[i]) isMisplacedLetter=false;
                    if (numberOfCoincidences>0 && isMisplacedLetter) this._interface.changeBackgroundPosition(this._turn, i, "misplacedLetter");
                }
            }*/

}
