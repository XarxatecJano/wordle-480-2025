import { MAX_WORD_SIZE } from "./env.js";
import { IGameChecker } from "./IGameChecker.js";
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
        this.checker.checkRightLetters();
        this.checker.checkMisplacedLetters();
        this.checker.checkWrongLetters();
        this.updateActualLettersUsed();
        this.resetElementsOfLine();

    }
    resetElementsOfLine(): void {
        this.checker.turn++;
        this.checker.actualPosition = 0;
        this.checker.actualWord = "";
    }


    nextPosition(): void {
        this.checker.actualPosition++;
    }

    updateActualLettersUsed(): void {
        if (this.checker.turn == 1) {
            this.checker.actualLetters = this.checker.actualWord;
        } else {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (!this.checker.actualLetters[i].includes(this.checker.actualWord[i])) {
                    this.checker.actualLetters += this.checker.actualWord[i];
                }
            }
        }
    }
}