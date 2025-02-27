import { GameLogic } from "../Game/GameLogic.js";
import { ICheckFinal } from "./ICheckFinal.js";
export const MAX_ATTEMPTS:number = 6;


export class CheckLoser implements ICheckFinal{
    _game: GameLogic;
    constructor(pickedWord:string){
        this._game = GameLogic.getInstance(pickedWord);
    }

    check(): boolean {
        return this._game.turn === MAX_ATTEMPTS && this._game.actualWord !== this._game.pickedWord;
    }
}