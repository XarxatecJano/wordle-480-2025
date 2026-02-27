export class GameManager {
    
    private _turn: number
    private _position: number
    
    constructor(){
        this._turn = 0;
        this._position = 0
    }

    setNewTurn(){ this.addTurn(); this.resetPosition() }

    addTurn(){ this.turn++ }

    addPosition(){ this.position++ }

    removePosition(){ if ( this.position > 0 ) this.position -- }

    resetPosition(){ this._position = 0 }

    get turn(){return this._turn;}
    set turn(value){this._turn = value;}

    get position(){return this._position;}
    set position(value){this._position = value;}
}