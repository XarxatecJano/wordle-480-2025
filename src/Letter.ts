import { MAX_WORD_SIZE } from "./env";

export class Letter {
    private code: string = "";
    private _validLetterCodes: string[] = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];


    constructor(code: string) {
        this.code = code;
    }

    private transformCodeToLetter(code: string): string {
        let letter: string = "";
        if (code == "Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    public getChar(): string {
        return this.transformCodeToLetter(this.code);
    }

    isValidLetter(position: number): boolean {
        return this._validLetterCodes.includes(this.code) && position < MAX_WORD_SIZE;
    }

    isEnterKey(): boolean {
        return this.code == "Enter";
    }

    isBackspaceKey(): boolean {
        return this.code == "Backspace";
    }
}