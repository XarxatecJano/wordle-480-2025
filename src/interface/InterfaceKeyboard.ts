import { UserInterfaceController } from "./UserInterfaceController.js";
import { KeyState } from "./keyboard/KeyState.js";
import { Key } from "./keyboard/Key.js";
import { VALID_LETTERS } from "../env.js";

export class InterfaceKeyboard {
    private userInterfaceController: UserInterfaceController;
    private keys: Key[] = [];

    static gameKeyboard: InterfaceKeyboard;

    static getGameKeyboard(interfaceController: UserInterfaceController): InterfaceKeyboard {
        if (this.gameKeyboard == null) {
            this.gameKeyboard = new InterfaceKeyboard(interfaceController);
        }
        return this.gameKeyboard;
    }

    constructor(interfaceController: UserInterfaceController){
        this.userInterfaceController = interfaceController;
        let newKeys = [];
        for (let code of VALID_LETTERS){
            const newKey = new Key(code);
            newKeys.push(newKey);
        }
        this.keys = newKeys;
    }
    setKeyState(code: string, state: KeyState):void {
        const key = this.getKeyFromCode(code);

        if (key!=null){
            key.setState(state);
            this.userInterfaceController.changeKeyboardElementBackground(key.getCode(), key.getState());
        }
    }

    getKeyFromCode(code: string): Key | null {
        for (let key of this.keys){
            if (key.getCode() == code) return key;
        }
        return null;
    }
}