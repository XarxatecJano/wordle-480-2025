import { Interface } from "./Interface.js";

const MAX_ATTEMPTS:number = 6;

export class Game extends Interface {
    private static instance: Game;
    private _pickedWord: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    constructor(pickedWord: string){
        super()
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;

    }

    get pickedWord() { return this._pickedWord; }
    set pickedWord(word) { this._pickedWord = word; }

    get actualWord() { return this._actualWord; }
    set actualWord(word) { this._actualWord = word; }

    get turn() { return this._turn; }
    set turn(num) { this._turn = num; }

    get actualPosition() { return this._actualPosition; }
    set actualPosition(num) { this._actualPosition = num; }


    public static getInstance (pickedWord: string){
        if (!Game.instance){
            Game.instance = new Game(pickedWord);
        }
        return Game.instance;
    }
    
    checkWordIsRight():void{
        if (this._actualWord == this._pickedWord){
            location.assign("/winner");
        }
    }

    checkGameIsOver():void{
        if (this._actualWord != this._pickedWord && this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }


    
}