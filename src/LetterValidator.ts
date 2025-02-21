const MAX_WORD_SIZE:number = 5;
const LETTER_A: number = 65;
const LETTER_Z: number = 90;
const LETTER_Ñ: number = 165;

export class LetterValidator {

    private validLetterCodes: string[];

    constructor() {
        this.validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO",
            "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK",
            "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "KeyÑ"
        ];
    }

    isLetterInRange(asciiNumber: number): boolean {
        return (LETTER_A <= asciiNumber && asciiNumber <= LETTER_Z) ||
               (asciiNumber === LETTER_Ñ);
    }

    isPositionInRange(actualPosition: number): boolean {
        return actualPosition < MAX_WORD_SIZE;
    }

    isValidLetter(code: string, actualPosition: number): boolean {
        let asciiNumber = code.charCodeAt(3);
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
        let asciiNumber = code.charCodeAt(3);
        return this.transformAsciiToLetter(asciiNumber);
    }
}
