import {MAX_WORD_SIZE} from "./env.js";
export const LETTERS = {A:60, Z:90}

export const GET_LETTER_VALUE = 3;
export class ValidateLetter{

    private static instance: ValidateLetter;
    private _code: string;
    private _actualPosition: number;
    constructor(code:string, posicionActual: number ){ 
        this._code = code;
        this._actualPosition = posicionActual;
    }

    setCode(code: string){
        this._code = code
    }
    setActualPosition(actualPosition: number ){
        this._actualPosition = actualPosition;
    }

    public static getInstance(code:string, actualPosition: number ): ValidateLetter{
        if(!ValidateLetter.instance){
            ValidateLetter.instance = new ValidateLetter(code, actualPosition);
        }
        ValidateLetter.instance.setCode(code);
        ValidateLetter.instance.setActualPosition(actualPosition);
        return ValidateLetter.instance;
    }

    isValidLetter():boolean {
            return  ((this._code.charCodeAt(GET_LETTER_VALUE) >= LETTERS.A && this._code.charCodeAt(GET_LETTER_VALUE) <= LETTERS.Z) || this._code ==="Semicolon") && this._actualPosition < MAX_WORD_SIZE;
    }

    isEnterKey():boolean {
        return this._code=="Enter";
    }

    isBackspaceKey():boolean{
        return this._code=="Backspace";
    }

    transformCodeToLetter():string{
        let letter: string = "";
        if (this._code=="Semicolon") letter = "Ñ";
        else letter = this._code.split("y")[1];
        return letter;
    }
}