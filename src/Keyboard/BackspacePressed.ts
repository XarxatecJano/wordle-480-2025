import { Game} from "../Game/Game";
import { IKeyPressed } from "../Keyboard/IKeyPressed";

export class BackspacePressed  implements IKeyPressed{
    _game: Game
    constructor(game :Game){
        this._game = game;
    }

    execute(): void {
        if (this._game.gameLogic.actualPosition > 0) {
            this._game.gameLogic.actualPosition -= 1;
            this._game.gameLogic.actualWord = this._game.gameLogic.actualWord.slice(0,-1);
            this._game.gameLogic.deleteLetter(this._game.gameLogic.turn, this._game.gameLogic.actualPosition);
        }
    }
}