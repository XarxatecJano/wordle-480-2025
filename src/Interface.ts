export class Interface {
    setNewLetter(turn: number,position: number, letter: string) {
        this.getCell(turn, position).textContent = letter;
    }
    deleteLetter(turn: number, position: number) {
       this.getCell(turn, position).textContent = "";
    }
    changeBackgroundPosition(turn: number, position: number, state: string){
        let positionClass = this.changeColorWithState(state);
        this.getCell(turn, position).classList.add(positionClass);
    }
    changeBackgroundKey(letter: string, state: string){
        const keys: any = document.getElementsByClassName("key");
        let code = "Key" + letter;
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !=="Backspace"){
                let positionClass = this.changeColorWithState(state);
                key.classList.add(positionClass);
            }
       }
    }

    private getCell(turn: number, position: number ): HTMLElement{
        return Array.from(document.getElementById(`row_${turn}`)!.children)[position] as HTMLElement;
    }

    changeColorWithState(state:string):string{
        let color = "cell-grey";
        if (state=="rightLetter") color = "cell-green";
        if (state=="misplacedLetter") color = "cell-orange";
        return color;
    }

}