import { CreateChecks } from "../Check/CreateChecks.js";
import { Game } from "../Game/Game.js";
import { UpadateGame } from "../Game/UpdateGame.js";
import { IKeyPressed } from "../Keyboard/IKeyPressed";
import {MAX_WORD_SIZE} from "../env.js";


export class EnterPressed implements IKeyPressed{
    _game: Game
    _gameUpdater!: UpadateGame

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
        this._gameUpdater = UpadateGame.getInstance(this._game);
        this._gameUpdater.updateAfterANewWordLogic(checks);
        this.paintBakcgroundCells();
        this._gameUpdater.clearAfterANewWord();

    }

    private paintBakcgroundCells():void{
            this._game.gameLogic.typeCell.forEach((type, position) =>{
                this._game.gameLogic.changeBackgroundPosition(this._game.gameLogic.turn, position, type);
            })
        }


}