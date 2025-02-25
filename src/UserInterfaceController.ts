import { KeyState } from "./KeyState.js";

export class UserInterfaceController {
    keys: any = document.getElementsByClassName("key");

    setNewLetter(turn: number, position: number, letter: string) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = letter;
    }
    deleteLetter(turn: number, position: number) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = "";
    }
    changeGridCellLetter(turn: number, position: number, state: string) {
        let positionClass = "cell-grey";
        if (state == "rightLetter") positionClass = "cell-green";
        if (state == "misplacedLetter") positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].classList.add(positionClass);
    }
    changeKeyboardElementBackground(code: string, state: KeyState) {
        let positionClass = "cell-grey";
        if (state == KeyState.RIGHT) positionClass = "cell-green";
        if (state == KeyState.MISPLACED) positionClass = "cell-orange";
        for (let key of this.keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add(positionClass);
            }
        }
    }
}