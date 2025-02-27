import { Interface } from "../Interface.js";
import { CheckLoser } from "../Check/CheckLoser.js";
import { CheckWordIsRight } from "../Check/CheckWordIsRight.js";
import { ICheckFinal } from "../Check/ICheckFinal.js";

export class GameLogic extends Interface{
    private _pickedWord: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    private _rightPositionLetters: Map<string, number>;
    private _misplacedPositionLetters: Map<string, number>;
    private _typeCell: Map<number, string>;
    private static instance: GameLogic;
    private _checkFinal!: ICheckFinal;
    constructor(pickedWord:string){
        super();
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;
        this._rightPositionLetters = new Map()
        this._misplacedPositionLetters = new Map();
        this._typeCell = new Map();
    }
    
    get pickedWord(){
        return this._pickedWord;
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
        return this._misplacedPositionLetters;
    }

    get typeCell(){
        return this._typeCell;
    }

    static getInstance(pickedWord:string ){
        if (!GameLogic.instance){
            GameLogic.instance = new GameLogic(pickedWord)
        }
        return GameLogic.instance;
    }
    
    checkWordIsRightLogic(): boolean {
        this._checkFinal = new CheckWordIsRight(this.pickedWord);
        return this._checkFinal.check();
    }

    checkGameIsOverlogic(): boolean {
        this._checkFinal = new CheckLoser(this.pickedWord);
        return this._checkFinal.check();
    }
}