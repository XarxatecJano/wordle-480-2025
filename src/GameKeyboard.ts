import { UserInterfaceController } from "./UserInterfaceController.js";
import { KeyState } from "./KeyState.js";
import { Key } from "./Key.js";

export class GameKeyboard {
    private interface: UserInterfaceController;
    private codes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
    private keys: Key[] = [];
    constructor(interfacec: UserInterfaceController){
        this.interface = interfacec;
        let newKeys = [];
        for (let code of this.codes){
            const newKey = new Key(code);
            newKeys.push(newKey);
        }
        this.keys = newKeys;
    }
    setKeyboardKeyState(code: string, state: KeyState):void {
        const key = this.getKeyFromCode(code);
        if (key!=null){
            key.setState(state);
            console.log('setkeyboardkeystate code: %s to: %s', key.getCode(), key.getState());
            this.interface.changeKeyboardElementBackground(key.getCode(), key.getState());
        }
    }

    getKeyFromCode(code: string): Key | null {
        for (let key of this.keys){
            if (key.getCode() == code) return key;
        }
        return null;
    }
}