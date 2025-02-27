import { GameLogic } from "../Game/GameLogic.js";
import { ICheckFinal } from "./ICheckFinal.js";

export class CheckWordIsRight implements ICheckFinal{
    _game:GameLogic;
    constructor(pickedWord: string){
        this._game = GameLogic.getInstance(pickedWord);
    }

    check():boolean{
        return this._game.actualWord === this._game.pickedWord;
    }
}