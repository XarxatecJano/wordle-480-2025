export class UtilHTML{

    static changeBackgroundCell( turn: number, position: number, cellColor: string ){
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].classList.add(cellColor);
    }

    static changeTextContentCell( turn: number, position: number, text: string ){
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = text;
    }
}