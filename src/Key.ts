import { VALID_LETTER_CODES } from "./env.js";


export class Key {
    isValidLetter(code: string):boolean {        
        return  VALID_LETTER_CODES.includes(code);
    }

    isEnterKey(code: string):boolean {
        return code == "Enter";
    }

    isBackspaceKey(code: string):boolean {
        return code == "Backspace";
    }

    transformCodeToLetter(code: string):string {
        let letter: string = "";
        if (code == "Semicolon") 
            letter = "Ñ";
        else 
            letter = code.split("y")[1];
        return letter;
    }

}