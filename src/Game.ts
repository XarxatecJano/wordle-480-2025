import { CheckCorrectLetters } from "./Check/CheckCorrectLetters.js";
import { CheckMisplacedLetters} from "./Check/CheckMisplacedLetters.js";
import { CheckWrongLetters} from "./Check/CheckWrongLetters.js";
import { ICheck } from "./Check/ICheck.js";
import {Interface} from "./Interface.js";
export const MAX_ATTEMPTS:number = 6;

export class Game extends Interface {
    private _pickedWord: string
    protected _actualWord: string
    protected _turn: number
    protected _actualPosition: number
    private _rightPositionLetters: Map<string, number>;
    private _MisplacedPositionLetters: Map<string, number>;
    private _typeCell: Map<number, string>;
    constructor(pickedWord: string){
        super();
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;
        this._rightPositionLetters = new Map()
        this._MisplacedPositionLetters = new Map();
        this._typeCell = new Map();
    }

    get pickedWord(){
        return this._pickedWord;
    }
    set pickedWord(word){
        this._pickedWord = word;
    }

    get actualWord(){
        return this._actualWord;
    }
    set actualWord(word){
        this._actualWord = word;
    }

    get turn(){
        return this._turn;
    }
    set turn(num){
        this._turn = num;
    }

    get actualPosition(){
        return this._actualPosition;
    }
    set actualPosition(num){
        this._actualPosition = num;
    }
    
    get rightPositionLetters(){
        return this._rightPositionLetters;
    }

    get misplacedPositionLetters(){
        return this._MisplacedPositionLetters;
    }

    get typeCell(){
        return this._typeCell;
    }

    

    checkWordIsRight():void{
        if (this._actualWord == this._pickedWord){
            location.assign("/winner");
        }
    }
    updateAfterANewWord = ():void=>{
        let strategies:ICheck[] = [
            new CheckCorrectLetters(this),
            new CheckMisplacedLetters(this),
            new CheckWrongLetters(this)
        ];
        
        strategies.forEach(strategy => strategy.check(this))
        this.paintBakcgroundCells();
        this._rightPositionLetters.clear();
        this._MisplacedPositionLetters.clear();
        this._typeCell.clear();
        this._turn += 1;
        this._actualPosition = 0;
        this._actualWord = "";
    }

    private paintBakcgroundCells():void{
        this._typeCell.forEach((type, position) =>{
            console.log("turno " + position + " tipo " + type);
            this.changeBackgroundPosition(this.turn, position, type);
        })
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS && this._actualWord != this._pickedWord){
            location.assign("/loser");
        }
    }


}