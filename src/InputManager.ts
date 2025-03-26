export class InputManager {
    private validLetterCodes: string[];

    constructor() {
        this.validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY","KeyU", "KeyI", "KeyO", "KeyP",
            "KeyA", "KeyS","KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK","KeyL",
            "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB","KeyN", "KeyM", "Semicolon"
        ];
    }

    isValidLetter(code: string, actualPosition: number, maxWordSize: number): boolean {
        return this.validLetterCodes.includes(code) && actualPosition < maxWordSize;
    }

    isEnterKey(code: string): boolean {
        return code === "Enter";
    }

    isBackspaceKey(code: string): boolean {
        return code === "Backspace";
    }

    transformCodeToLetter(code: string): string {
        return code === "Semicolon" ? "Ñ" : code.slice(3);
    }
}
