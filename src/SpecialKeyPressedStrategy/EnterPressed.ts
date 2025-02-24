import { Game } from "../Game";
import { IKeyPressed } from "./IKeyPressed";
import { MAX_WORD_SIZE } from "../env.js";

export class EnterPressed implements IKeyPressed{
    private _game: Game;

    constructor(game: Game){
        this._game = game;
    }

    execute():void{

        if (this._game.actualWord.length == MAX_WORD_SIZE){
                    this._game.checkWordIsRight();
                    this._game.checkGameIsOver();

                    this._game.actualWord.split("").forEach(letter => {
                        this._game.changeBackgroundKey(letter);
                    });
                    
                    this._game.updateAfterANewWord();
        }
    }

}