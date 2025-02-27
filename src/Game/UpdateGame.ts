import { CreateChecks } from "../Check/CreateChecks";
import { Game } from "./Game";

export class UpadateGame{

        _game: Game
        static instance: UpadateGame
        constructor(game: Game){
            this._game = game;
        }

        static getInstance(game: Game){
            if(!UpadateGame.instance){
                UpadateGame.instance = new UpadateGame(game);
            }
            return UpadateGame.instance;
        }
        updateAfterANewWordLogic(checks: CreateChecks):void{
            let strategies = checks.check(this._game.gameLogic);
            strategies.forEach(strategy => strategy.check(this._game));  
        }

        clearAfterANewWord(){
            this._game.gameLogic.rightPositionLetters.clear();
            this._game.gameLogic.misplacedPositionLetters.clear();
            this._game.gameLogic.typeCell.clear();
            this._game.gameLogic.turn += 1;
            this._game.gameLogic.actualPosition = 0;
            this._game.gameLogic.actualWord = "";
        }
       
}