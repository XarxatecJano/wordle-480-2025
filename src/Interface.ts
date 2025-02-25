const STATE_CLASSES: Record<string, string> = {
    rightLetter: "cell-green",
    misplacedLetter: "cell-orange",
    default: "cell-grey",
};

export class Interface {


    setNewLetter(turn: number,position: number, letter: string) {
        const cell = this.getCell(turn, position);
        if (cell) cell.textContent = letter;
    }

    deleteLetter(turn: number, position: number) {
        const cell = this.getCell(turn, position);
        if (cell) cell.textContent = "";
    }

    changeBackgroundPosition(turn: number, position: number, state: string){
        const cell = this.getCell(turn, position);
        if (!cell) return;

        cell.classList.add(STATE_CLASSES[state] || STATE_CLASSES.default);
    
    }
    changeBackgroundKey(code: string, state: string){
       const keys: any = document.getElementsByClassName("key");
       for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add(STATE_CLASSES[state]);
            }
       }
    }

   

    private getCell(turn: number, position: number): HTMLElement | null {
        return document.getElementById(`row_${turn}`)?.children[position] as HTMLElement | null;
    }
}