import { CreateChecks } from "../Check/CreateChecks.js";
import { Game } from "../Game.js";
import { IKeyPressed } from "../Keyboard/IKeyPressed";
import {MAX_WORD_SIZE} from "../env.js";


export class EnterPressed implements IKeyPressed{
    _game: Game

    constructor(game :Game){
        this._game = game;
    }
    execute():void{
        if (this._game.actualWord.length == MAX_WORD_SIZE){
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    updateAfterANewWord = ():void=>{
        let checks = CreateChecks.getInstance();
        let strategies = checks.check(this._game);
        strategies.forEach(strategy => strategy.check(this._game))
        this.paintBakcgroundCells();
        this._game.rightPositionLetters.clear();
        this._game.misplacedPositionLetters.clear();
        this._game.typeCell.clear();
        this._game.turn += 1;
        this._game.actualPosition = 0;
        this._game.actualWord = "";
    }

    private paintBakcgroundCells():void{
            this._game.typeCell.forEach((type, position) =>{
                this._game.changeBackgroundPosition(this._game.turn, position, type);
            })
        }


}