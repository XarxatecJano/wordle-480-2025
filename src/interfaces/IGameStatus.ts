import { GameManager } from "../managers/GameManager.js"

export interface IGameStatus{

    _gameManager: GameManager

    setStatus() : void

}