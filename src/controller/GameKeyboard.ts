import { UserInterfaceController } from "./UserInterfaceController.js";
import { KeyType } from "../enum/KeyType.js";
import { Key } from "../model/Key.js";
import { VALID_LETTERS } from "../env.js";

export class GameKeyboard {
    private interface: UserInterfaceController;
    private keys: Key[] = [];

    static gameKeyboard: GameKeyboard;

    static getGameKeyboard(interfaceController: UserInterfaceController): GameKeyboard {
        if (this.gameKeyboard == null) {
            this.gameKeyboard = new GameKeyboard(interfaceController);
        }
        return this.gameKeyboard;
    }
    
    constructor(interfaceController: UserInterfaceController){
        this.interface = interfaceController;
        let newKeys = [];
        for (let code of VALID_LETTERS){
            const newKey = new Key(code);
            newKeys.push(newKey);
        }
        this.keys = newKeys;
    }
    setKeyState(code: string, state: KeyType):void {
        const key = this.getKeyFromCode(code);
        console.log(key)

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