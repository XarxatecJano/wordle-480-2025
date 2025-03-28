export class BackspaceCommand {
    constructor(turn, letterManager) {
        this._letterManager = letterManager;
        this._turn = turn;
    }
    execute() {
        if (this._turn.Position.position > 0)
            this._letterManager.deleteOneLetter();
    }
}
