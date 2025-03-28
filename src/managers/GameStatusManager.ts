import { IGameStatus } from "../interfaces/IGameStatus.js";

export class GameStatusManager{

    _gameStatus: IGameStatus[]

    constructor(gameStatus: IGameStatus[]){
        this._gameStatus = gameStatus
    }

    checkStatus(){
        this.gameStatus.forEach(element => { element.setStatus() });
    }

    set gameStatus(value: IGameStatus[]){this._gameStatus = value}
    get gameStatus(){return this._gameStatus}
}