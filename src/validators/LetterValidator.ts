import { MAX_WORD_SIZE } from "../config/env.js";  
const LETTER = {A:65, Z:90}
const LETTER_CODE_POSITION_VALUE: number = 3;

export class LetterValidator {


    constructor() {}

    isLetterInRange(asciiNumber: number): boolean {
        return (LETTER.A <= asciiNumber && asciiNumber <= LETTER.Z);
    }

    isPositionInRange(actualPosition: number): boolean {
        return actualPosition < MAX_WORD_SIZE;
    }

    isValidLetter(code: string, actualPosition: number): boolean {
        let asciiNumber = 0;
        if (code == "Semicolon"){
            return this.isPositionInRange(actualPosition);
        }
        asciiNumber = code.charCodeAt(LETTER_CODE_POSITION_VALUE);
    
        return this.isLetterInRange(asciiNumber) && this.isPositionInRange(actualPosition);
    }

    isEnterKey(code: string): boolean {
        return code === "Enter";
    }

    isBackspaceKey(code: string): boolean {
        return code === "Backspace";
    }

    transformAsciiToLetter(asciiNumber: number): string {
        return String.fromCharCode(asciiNumber);
    }

    transformCodeToLetter(code: string): string {
        if (code == 'Semicolon') return 'Ñ';
        let asciiNumber = code.charCodeAt(LETTER_CODE_POSITION_VALUE);
        return this.transformAsciiToLetter(asciiNumber);
    }
}
