
export class Interface {
    setNewLetter(turn: number, position: number, letter: string) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = letter;
    }
    deleteLetter(turn: number, position: number) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = "";
    }

    changeCheckedBackground(turn: number, letterIndex: number, state: string, actualWord: string): void {
        this.changeBackgroundPosition(turn, letterIndex, state);
        this.changeBackgroundKey(actualWord, state);
    }

    setElementState(state: string): string {
        let elementClass = "cell-grey";
        if (state == "rightLetter") elementClass = "cell-green";
        if (state == "misplacedLetter") elementClass = "cell-orange";
        return elementClass;
    }

    changeBackgroundPosition(turn: number, position: number, state: string) {
        let positionClass = this.setElementState(state);
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].classList.add(positionClass);
    }

    changeBackgroundKey(code: string, state: string) {
        code = "Key" + code;
        let positionClass = this.setElementState(state);
        const keys: any = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code) {
                if (state == "rightLetter") key.classList.remove("cell-orange");
                key.classList.add(positionClass);

            }
        }
    }

}