import { WordManager } from "../managers/WordManager";

export abstract class CheckType {

    _wordManager: WordManager;

    constructor( wordManager: WordManager ){
        this._wordManager = wordManager
    }

    set wordManager(value: WordManager){this._wordManager = value}
    get wordManager(){return this._wordManager}
}