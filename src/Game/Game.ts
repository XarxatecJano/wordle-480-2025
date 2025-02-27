import { GameLogic } from "./GameLogic.js";
import { INavigationService } from "../Navigation/INavigationService.js";


export class Game {
    private _gameLogic: GameLogic;
    private _navigation: INavigationService;
    private static instance: Game;
    constructor(pickedWord:string, navigation:INavigationService){
        this._gameLogic = GameLogic.getInstance(pickedWord);
        this._navigation = navigation
    }
    get gameLogic(){
        return this._gameLogic;
    }

    get navigation(){
        return this._navigation;
    }

    static getInstance(pickedWord :string, navigation:INavigationService): Game{
        if(!Game.instance) Game.instance = new Game(pickedWord,navigation);
        return Game.instance

    }

    checkWordIsRight():void{
        if (this._gameLogic.checkWordIsRight()) this._navigation.navigateTo("/winner");
        
    }

    checkGameIsOver():void{
        if(this._gameLogic.checkGameIsOver()) this._navigation.navigateTo("/loser");
    }


}