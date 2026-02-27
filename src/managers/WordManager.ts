import { Word } from "../word/Word.js";
import { GameManager } from "./GameManager.js";

export class WordManager{
    
    private _pickedWord: string
    private _words: Word[]
    private _gameManager: GameManager

    constructor(pickedWord: string, gameManager: GameManager){
        this._pickedWord = pickedWord;
        this._gameManager = gameManager
        this._words = [new Word(this.gameManager)];
    }

    allLetters() : string[]{
        let totalLetters : string[] = []
        for(let word of this.words){
            for(let letter of word.allLetters()){
                totalLetters.push(letter)
            }
        } 
        return totalLetters    
    }

    concidences( index: number ) : number{
        let pattern = new RegExp(this.actualWord().specificLetter(index),"g");
        return (RegExp(pattern).exec(this.pickedWord)||[]).length;
    }

    newEmptyWord(){ this.words.push(new Word(this.gameManager)) }

    actualWord(): Word{ return this.words[this.gameManager.turn] }

    actualWordLength(): number{ return this.actualWord().actuallength() }

    actualWordString():string{ return this.actualWord().toString() }

    sameWord(): boolean{ return this.actualWordString() == this.pickedWord }

    specificWord(index: number) : Word{ return this.words[index] }

    specificWordString(index: number) : string{ return this.specificWord(index).toString() }

    sameLetter(index: number): boolean{ return this.actualWord().specificLetter(index) == this._pickedWord[index] }

    get pickedWord(){ return this._pickedWord }
    set pickedWord(value){ this._pickedWord = value }

    get words(){ return this._words }
    set words(value){ this._words = value }

    get gameManager(){ return this._gameManager }
    set gameManager(value: GameManager){ this._gameManager = value }
}