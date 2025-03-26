import { IKeyboardUI } from "./IKeyboardUI";

export class KeyboardUI implements IKeyboardUI {
    changeKeyColor(code: string): void {
        const keys = document.getElementsByClassName("key");
        for (let i = 0; i < keys.length; i++) {
            const keyElement = keys[i] as HTMLButtonElement;
            if (keyElement.value === code && code !== "Enter" && code !== "Backspace") {
                keyElement.classList.add("keyPressed");
            }
        }
    }
}
