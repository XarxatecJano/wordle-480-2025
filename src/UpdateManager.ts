import { IGameChecker } from "./IGameChecker.js";
import {ColourSetMaps} from "./ColourSetMaps.js";
export class UpdateManager {
    private static _instance: UpdateManager;
    private checker: IGameChecker;
    constructor(checker: IGameChecker) {
        this.checker = checker;
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
        this.checker.currentPosition = 0;
        this.checker.actualWord = "";
    }


    nextPosition(): void {
        this.checker.currentPosition++;
    }

}