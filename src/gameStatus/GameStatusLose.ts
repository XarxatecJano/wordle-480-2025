import { LOCATION_GAME_OVER, MAX_ATTEMPTS } from "../env.js";
import { GameManager } from "../managers/GameManager.js";
import { IGameStatus } from "../interfaces/IGameStatus.js";

export class GameStatusLose implements IGameStatus {
   
    _gameManager: GameManager;

    constructor(game: GameManager){
        this._gameManager = game
    }
    
    setStatus(): void {
        if(this.game.turn + 1 >= MAX_ATTEMPTS){ location.assign(LOCATION_GAME_OVER) }
    }

    set game(value: GameManager){this._gameManager = value}
    get game(){return this._gameManager}
}