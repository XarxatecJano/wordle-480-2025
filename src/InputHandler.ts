import { KeyboardInputHandler } from "./KeyboardInputHandler.js";
import { MAX_WORD_SIZE } from "./env.js";

export class InputHandler implements KeyboardInputHandler {
    private validLetterCodes: string[];
    private currentPosition: number;

    constructor(validLetterCodes: string[], currentPosition: number) {
        this.validLetterCodes = validLetterCodes;
        this.currentPosition = currentPosition;
    }

    setCurrentPosition(position: number): void {
        this.currentPosition = position;
    }

    isValidLetter(code: string): boolean {

        if (code === "Enter" || code === "backspace") {
            return false;
        }
        return this.validLetterCodes.includes(code) && this.currentPosition < MAX_WORD_SIZE
    }
    isEnterKey(code: string): boolean {
        return code === "Enter"
    }
    isBackspaceKey(code: string): boolean {
        return code === "Backspace"
    }
    transformCodeToLetter(code: string): string {
        if (code === "Semicolon") return "Ñ";
        return code.split("y")[1];
    }

}