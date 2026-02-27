import { MAX_WORD_SIZE, MAX_ATTEMPTS, } from "../core/env.js";
import { Interface } from "../core/Interface.js";
import { IGameChecker } from "../interfaces/IGameChecker.js";
import { ColourSetMaps } from "../controllers/ColourSetMaps.js";

export class Checker implements IGameChecker {
    private static _instance: Checker;
    _INITIAL_TURN = 1;
    private _pickedWord: string
    private _actualWord = "";
    private _turn = this._INITIAL_TURN;
    private _interface: Interface
    constructor(pickedWord: string) {
        this._pickedWord = pickedWord;
        this._interface = new Interface();
    }
    get pickedWord() {
        return this._pickedWord;
    }
    set pickedWord(word) {
        this._pickedWord = word;
    }

    get actualWord() {
        return this._actualWord;
    }
    set actualWord(word) {
        this._actualWord = word;
    }

    get turn() {
        return this._turn;
    }
    set turn(num) {
        this._turn = num;
    }

    get interface() {
        return this._interface;
    }
    set interface(i) {
        this._interface = i;
    }

    public static getInstance(pickedWord: string): Checker {
        if (!Checker._instance) {
            Checker._instance = new Checker(pickedWord);
        }
        return Checker._instance;
    }

    checkWordIsRight(): void {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    }

    checkRightLetters(mapController: ColourSetMaps): void {
        let dictNumCoincidences = mapController.ColorMap;
        let choosenPositions = mapController.ChoosenPositionMap;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const letter = this._actualWord[i];
            if (this._pickedWord[i] == letter) {
                const numCoincidences = dictNumCoincidences.get(letter) || 0;
                this._interface.changeCheckedBackground(this._turn,
                    i, "rightLetter", this._actualWord[i]);
                dictNumCoincidences.set(this._actualWord[i], numCoincidences - 1);
                choosenPositions.set(i, true);
            }
        }
    }
    checkMisplacedLetters(mapController: ColourSetMaps): void {
        let dictNumCoincidences = mapController.ColorMap;
        let choosenPositions = mapController.ChoosenPositionMap;
        let actualLetter: string = "";
        let isMisplacedLetter: boolean;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = this._actualWord[i];
            if (this._pickedWord[i] == actualLetter) isMisplacedLetter = false;
            if ((dictNumCoincidences.get(actualLetter) || 0) > 0 && isMisplacedLetter) {
                this._interface.changeCheckedBackground(this._turn,
                    i, "misplacedLetter", this._actualWord[i]);
                const numCoincidences = dictNumCoincidences.get(actualLetter) || 0;
                dictNumCoincidences.set(actualLetter, numCoincidences - 1);
                choosenPositions.set(i, true);
            }
        }

    }


    checkWrongLetters(mapController: ColourSetMaps): void {
        let dictNumCoincidences = mapController.ColorMap;
        let choosenPositions = mapController.ChoosenPositionMap;
        let actualLetter = "";
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this._actualWord[i];
            const numCoincidences = dictNumCoincidences.get(actualLetter) || 0;
            if (numCoincidences == 0 && choosenPositions.get(i) == false) {
                this._interface.changeCheckedBackground(this._turn,
                    i, "wrongLetter", this._actualWord[i]);
            }
        }
    }

    checkGameIsOver(): void {
        if (this._turn == MAX_ATTEMPTS &&
            this._actualWord != this._pickedWord) {
            location.assign("/loser");
        }
    }
}