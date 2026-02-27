import { UserInterfaceController } from "./UserInterfaceController.js";
import { KeyState } from "./keyboard/KeyState.js";

export class InterfaceGrid {
    private userInterfaceController: UserInterfaceController;
    constructor(interfaceController: UserInterfaceController){
        this.userInterfaceController = interfaceController;
    }

    setLetterState(turn:number, position: number, state: KeyState) {
        this.userInterfaceController.changeGridCellLetter(turn, position, state);
    }

    setNewLetter(turn:number, position: number, char: string) {
        this.userInterfaceController.setNewLetter(turn, position, char);
    }

    deleteLetter(turn: number, position: number){
        this.userInterfaceController.deleteLetter(turn, position);
    }
}