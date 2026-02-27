import { GameManager } from "../managers/GameManager";

export abstract class PanelBackground{

    _gameManager: GameManager;

    constructor( gameManager: GameManager ){
        this._gameManager = gameManager
    }

    set gameManager( value: GameManager ){ this._gameManager = value }
    get gameManager(){ return this._gameManager }
}