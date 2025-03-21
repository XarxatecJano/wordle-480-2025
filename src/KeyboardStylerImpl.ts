import { IKeyboardStyler } from "./IKeyboardStyler";
import { IDOMAccess } from "./IDOMAccess";

export class KeyboardStylerImpl implements IKeyboardStyler {
    private static readonly CLASS_KEY_PRESSED = "keyPressed";

    private domAccess: IDOMAccess;

    constructor(domAccess: IDOMAccess) {
        this.domAccess = domAccess;
    }

    highlightKey(code: string): void {
        if (code !== "Enter" && code !== "Backspace") {
            const keys = this.domAccess.getElementsByClassName("key");
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i] as HTMLElement;
                if (key.getAttribute("value") === code) {
                    key.classList.add(KeyboardStylerImpl.CLASS_KEY_PRESSED)
                }
            }
        }
    }

}