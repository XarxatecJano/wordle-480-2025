import { GameManager } from "../managers/GameManager";
import { VisualManager } from "../managers/VisualManager";
import { WordManager } from "../managers/WordManager";

export abstract class Input{
    
    private _gameManager: GameManager
    private _visualManager: VisualManager
    private _wordManager: WordManager

    constructor(gameManager: GameManager, visualManager: VisualManager, wordManager: WordManager){
        this._gameManager = gameManager
        this._visualManager = visualManager
        this._wordManager = wordManager
    }

    get gameManager(){return this._gameManager}
    set gameManager(value){this._gameManager = value}

    get visualManager(){return this._visualManager}
    set visualManager(value: VisualManager){this._visualManager = value}

    get wordManager(){return this._wordManager}
    set wordManager(value: WordManager){this._wordManager = value}
}