import { IGameChecker } from "../interfaces/IGameChecker.js";
import {ColourSetMaps} from "../controllers/ColourSetMaps.js";
import {PositionManager} from "./PositionController.js";
export class UpdateManager {
    private static _instance: UpdateManager;
    private _positionManager:PositionManager;
    private checker: IGameChecker;
    constructor(checker: IGameChecker) {
        this.checker = checker;
        this._positionManager=PositionManager.getInstance();
    }
    public static getInstance(checker: IGameChecker): UpdateManager {
        if (!UpdateManager._instance) {
            UpdateManager._instance = new UpdateManager(checker);
        }
        return UpdateManager._instance;
    }

    updateAfterNewWord(): void {
        let mapController = new ColourSetMaps();
        mapController.setColourMap(this.checker.pickedWord);
        this.checker.checkRightLetters(mapController);
        this.checker.checkMisplacedLetters(mapController);
        this.checker.checkWrongLetters(mapController);      
        this.resetElementsOfLine();

    }
    resetElementsOfLine(): void {
        this.checker.turn++;
        this._positionManager.resetCurrentPosition();
        this.checker.actualWord = "";
    }

}