import { LOCATION_WIN} from "../env.js";
import { WordManager } from "../managers/WordManager.js";
import { GameManager } from "../managers/GameManager.js";
import { IGameStatus } from "../interfaces/IGameStatus.js";

export class GameStatusWin implements IGameStatus {
    
    _gameManager: GameManager;
    _wordManager: WordManager;
    
    constructor(wordManager: WordManager, game: GameManager){
        this._wordManager = wordManager
        this._gameManager = game
    }
    
    setStatus(): void {
        if(this.wordManager.sameWord()){ location.assign(LOCATION_WIN) }
    }

    set wordManager(value: WordManager){this._wordManager = value}
    get wordManager(){return this._wordManager}

    set game(value: GameManager){this._gameManager = value}
    get game(){return this._gameManager}

}