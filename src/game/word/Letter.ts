import { VALID_LETTERS } from "../../env.js";

export class Letter {
    private code: string = "";
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

    public getCode(): string {
        return this.code;
    }

    isValidLetter(): boolean {
        return VALID_LETTERS.includes(this.code);
    }

    isEnterKey(): boolean {
        return this.code == "Enter";
    }

    isBackspaceKey(): boolean {
        return this.code == "Backspace";
    }

    equals(otherLetter: Letter): boolean {
        return this.getCode() == otherLetter.getCode();
    }
}