import { KeyBoardController } from "../controllers/keyBoardController.js";

export class Game {
    private static _instance:Game;
    private _keyBoardController: KeyBoardController
    
    constructor(pickedWord: string) {
        this._keyBoardController = new KeyBoardController(pickedWord);
        }

    public static getInstance(pickedWord:string):Game{
        if(!Game._instance){
            Game._instance=new Game(pickedWord);
        }
        return Game._instance;
    }

    newKeyPressed(code: string): void {
        this._keyBoardController.setNewKey(code);
    }
}
