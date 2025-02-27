import { MAX_WORD_SIZE } from "../core/env";

export class PositionManager   {
    private static _instance: PositionManager;
    _INITIAL_POSITION=0;
    private _currentPosition = this._INITIAL_POSITION;   
     
    public static getInstance(): PositionManager{
        if (!PositionManager._instance) {
            PositionManager._instance = new PositionManager();
        }
        return PositionManager._instance;
    }
    get currentPosition() {
        return this._currentPosition;
    }
    set currentPosition(num) {
        this._currentPosition = num;
    }
    isValidPosition():boolean{
        return this.currentPosition < MAX_WORD_SIZE;
    }
    resetCurrentPosition(){
        this._currentPosition=0;
    }
    nextPosition(): void {
        this.currentPosition++;
    }

}