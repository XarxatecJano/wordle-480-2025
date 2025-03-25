import { IInputHandler } from "./IINputHandler";
import { MAX_WORD_SIZE } from "./env";

export class InputHandler implements IInputHandler {
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
        return this.validLetterCodes.includes(code) && this.currentPosition < MAX_WORD_SIZE
    }
    isEnterKey(code: String): boolean {
        return code === "Enter"
    }
    isBackspaceKey(code: String): boolean {
        return code === "Backspace"
    }
    transformCodeToLetter(code: string): string {
        if (code === "Semicolon") return "Ñ";
        return code.split("y")[1];
    }

}