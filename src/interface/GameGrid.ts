import { UserInterfaceController } from "./UserInterfaceController.js";
import { KeyType } from "./keyboard/KeyType.js";
import { Word } from "../game/word/Word.js";

export class GameGrid {
    private interface: UserInterfaceController;
    constructor(interfaceController: UserInterfaceController){
        this.interface = interfaceController;
    }

    setLetterState(turn:number, position: number, state: KeyType) {
        this.interface.changeGridCellLetter(turn, position, state);
    }

    setNewLetter(turn:number, position: number, char: string) {
        this.interface.setNewLetter(turn, position, char);
    }

    deleteLetter(turn: number, position: number){
        this.interface.deleteLetter(turn, position);
    }
}