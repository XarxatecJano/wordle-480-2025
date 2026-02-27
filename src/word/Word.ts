import { GameManager } from "../managers/GameManager";

export class Word {

    private _letters: string[];
    private _gameManager: GameManager
    private _hash: Map<string, number>

    constructor(gameManager: GameManager){
        this._letters = [];
        this._gameManager = gameManager
        this._hash = new Map()
    }

    actuallength(): number { return this.letters.length }

    actualLetter(): string { return this.letters[this.gameManager.position - 1] }

    specificLetter(position: number): string{ return this.letters[position] }

    addLetter(letter: string){ this._letters.push(letter) }

    removeLetter(){ this._letters.pop() }

    allLetters(): string[]{
        let letters: string[] = []
        for(let letter of this.letters){ letters.push(letter) }
        return letters
    }

    toString(): string{
        let word = "";
        this._letters.forEach(element => { word += element });
        return word;
    }

    get letters(){return this._letters;}
    set letters(wordsArray: string[]){this._letters = wordsArray;}

    get gameManager(){ return this._gameManager }
    set gameManager(value: GameManager){ this._gameManager = value }

    get hash () { return this._hash }
    set hash ( value: Map<string, number> ) { this._hash = value }
}