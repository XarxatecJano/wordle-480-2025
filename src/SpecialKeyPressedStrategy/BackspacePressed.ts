import { Game } from "../Game";
import { IKeyPressed } from "./IKeyPressed";

export class BackspacePressed implements IKeyPressed{
    private _game: Game;

    constructor(game: Game){
        this._game = game;
    }

    execute():void{
        if (this._game.actualPosition > 0) {
            this._game.actualPosition -= 1;
            this._game.actualWord = this._game.actualWord.slice(0, -1);
            this._game.deleteLetter(this._game.turn, this._game.actualPosition);
        
        }
    }

}