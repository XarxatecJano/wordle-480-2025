import { MAX_WORD_SIZE, } from "./env.js";
import { Interface } from "./Interface.js";
import { Letter } from "./Letter.js";
import { Checker } from "./Checker.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        this._checker = new Checker(pickedWord);
        //   this._actualPosition = 0;
        this._validLetterCodes = new Letter();
        this._interface = new Interface();
    }
    Object.defineProperty(Game.prototype, "checker", {
        get: function () {
            return this._checker;
        },
        set: function (checker) {
            this._checker = checker;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.isValidLetter = function (code) {
        return this._validLetterCodes.includes(code) && this.checker.actualPosition < MAX_WORD_SIZE;
    };
    Game.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Game.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    Game.prototype.newLetter = function (code) {
        var letter = this._validLetterCodes.transformCodeToLetter(code);
        this._interface.setNewLetter(this.checker.turn, this._checker.actualPosition, letter);
        this.checker.aumentarPosicion();
        this.checker.actualWord += letter;
    };
    /*
//Checker
    checkWordIsRight():void{
        if (this._actualWord == this._pickedWord){
            location.assign("/winner");
        }
    }
//Checker
    checkRightLetters = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this._pickedWord[i]==this._actualWord[i]){
                this._interface.changeBackgroundPosition(this._turn, i, "rightLetter");
            }
        }
    }
//Checker
    checkMisplacedLetters = ():void=> {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidences: number = 0;
        let isMisplacedLetter: boolean;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidences = (this._pickedWord.match(pattern)||[]).length;
            if (this._pickedWord[i]==this._actualWord[i]) isMisplacedLetter=false;
            if (numberOfCoincidences>0 && isMisplacedLetter) this._interface.changeBackgroundPosition(this._turn, i, "misplacedLetter");
        }
    }
//Checker
    checkWrongLetters = ():void=>{
        let actualLetter = "";
        let pattern:RegExp;
        let numberOfCoincidences = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidences = (this._pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidences==0) this._interface.changeBackgroundPosition(this._turn, i, "wrongLetter");
        }
    }
//Checker
    updateAfterANewWord = ():void=>{
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this._turn = this._turn + 1;
        this._actualPosition = 0;
        this._actualWord = "";
    }
//Checker
    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }
*/
    Game.prototype.enterPressed = function () {
        if (this.checker.actualWord.length == MAX_WORD_SIZE) {
            this.checker.checkWordIsRight();
            this.checker.checkGameIsOver();
            this.checker.updateAfterANewWord();
        }
    };
    Game.prototype.backspacePressed = function () {
        if (this.checker.actualPosition > 0) {
            this.checker.actualPosition -= 1;
            this._interface.resetBackgroundKeys(this.checker.actualWord);
            this.checker.actualWord = this.checker.actualWord.slice(0, this.checker.actualWord.length - 1);
            this._interface.deleteLetter(this.checker.turn, this.checker.actualPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        if (this.isValidLetter(code))
            this.newLetter(code);
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
        if (this.checker.actualPosition < MAX_WORD_SIZE)
            this._interface.changeBackgroundKey(code);
    };
    return Game;
}());
export { Game };
