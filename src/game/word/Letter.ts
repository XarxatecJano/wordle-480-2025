import { VALID_LETTERS } from "../../env.js";

export class Letter {
    private code: string = "";
    constructor(code: string) {
        this.code = code;
        if (!(this.isEnterKey() || this.isBackspaceKey() || this.isCode(code))) {
            this.code = this.charToCode(code);

            if (!this.isValidLetter()) {
                throw new Error("Codigo desconocido: " + code);
            }
        }
    }

    isCode(code: string): boolean {
        return code.startsWith("Key");
    }

    charToCode(char: string): string {
        return "Key" + char;
    }

    codeToChar(code: string): string {
        let char: string = "";
        if (code == "Semicolon") char = "Ñ";
        else char = code.split("y")[1];
        return char;
    }

    getChar(): string {
        return this.codeToChar(this.code);
    }

    getCode(): string {
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