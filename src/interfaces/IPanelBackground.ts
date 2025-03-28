import { GameManager } from "../managers/GameManager";

export interface IPanelBackground{

    _gameManager: GameManager

    changeBackgroundColor( state: string , index: number ): void;

}