import { UserInterfaceController } from "./UserInterfaceController"
import { Word } from "./Word";

export class GameGrid {
    private interface: UserInterfaceController;
    constructor(interfaceController: UserInterfaceController){
        this.interface = interfaceController;
    }

    setGridLetterState(turn:number, position: number, state: string) {
        this.interface.changeGridCellLetter(turn, position, state);
    }

    setNewLetter(turn:number, position: number, char: string) {
        this.interface.setNewLetter(turn, position, char);
    }

    deleteLetter(turn: number, position: number){
        this.interface.deleteLetter(turn, position);
    }
}