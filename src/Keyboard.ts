import { VALID_LETTER_CODES } from "./env.js";


export class Keyboard {
    isValidLetter(code: string):boolean {        
        return  VALID_LETTER_CODES.includes(code);
    }

    isEnterKey(code: string):boolean {
        return code == "Enter";
    }

    isBackspaceKey(code: string):boolean {
        return code == "Backspace";
    }

}