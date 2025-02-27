import { CreateChecks } from "../Check/CreateChecks.js";
import { Game } from "../Game/Game.js";
import { IKeyPressed } from "../Keyboard/IKeyPressed";
import {MAX_WORD_SIZE} from "../env.js";


export class EnterPressed implements IKeyPressed{
    _game: Game

    constructor(game :Game){
        this._game = game;
    }
    execute():void{
        if (this._game.gameLogic.actualWord.length == MAX_WORD_SIZE){
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    updateAfterANewWord = ():void=>{
        let checks = CreateChecks.getInstance();
        let strategies = checks.check(this._game.gameLogic);
        strategies.forEach(strategy => strategy.check(this._game));
        this.paintBakcgroundCells();
        this._game.gameLogic.rightPositionLetters.clear();
        this._game.gameLogic.misplacedPositionLetters.clear();
        this._game.gameLogic.typeCell.clear();
        this._game.gameLogic.turn += 1;
        this._game.gameLogic.actualPosition = 0;
        this._game.gameLogic.actualWord = "";
    }

    private paintBakcgroundCells():void{
            this._game.gameLogic.typeCell.forEach((type, position) =>{
                this._game.gameLogic.changeBackgroundPosition(this._game.gameLogic.turn, position, type);
            })
        }


}