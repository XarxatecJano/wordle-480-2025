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

        const stateClasses: Record<string, string> = {
            rightLetter: "cell-green",
            misplacedLetter: "cell-orange",
            default: "cell-grey",
        };
        cell.classList.add(stateClasses[state] || stateClasses.default);
    
    }
    changeBackgroundKey(code: string){
       const keys: any = document.getElementsByClassName("key");
       for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !=="Backspace"){
                key.classList.add("keyPressed");
            }
       }
    }

    private getCell(turn: number, position: number): HTMLElement | null {
        return document.getElementById(`row_${turn}`)?.children[position] as HTMLElement | null;
    }
}