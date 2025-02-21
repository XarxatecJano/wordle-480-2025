import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
import {Interface} from "./Interface.js";
import { Letra } from "./Letra.js";

export class Game {
    private _pickedWord: string
    private _actualWord: Letra[]
    private _turn: number
    private _actualPosition: number
    private _validLetterCodes: string[]
    private _interface: Interface
    constructor(pickedWord: string){
        this._pickedWord = pickedWord;
        this._actualWord = [];
        this._turn = 1;
        this._actualPosition = 0;
        this._validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this._interface = new Interface();
    }

    get pickedWord(){
        return this._pickedWord;
    }
    set pickedWord(word){
        this._pickedWord = word;
    }

    get actualWord(){
        return this._actualWord;
    }
    set actualWord(word){
        this._actualWord = word;
    }

    get turn(){
        return this._turn;
    }
    set turn(num){
        this._turn = num;
    }

    get actualPosition(){
        return this._actualPosition;
    }
    set actualPosition(num){
        this._actualPosition = num;
    }

    get validLetterCodes() {
        return this._validLetterCodes
    }
    set validLetterCodes(letters) {
        this._validLetterCodes = letters;
    }

    get interface() {
        return this._interface;
    }
    set interface(i) {
        this._interface = i;
    }
    
    isValidLetter(code: string):boolean {
        
        return  this._validLetterCodes.includes(code) && this._actualPosition < MAX_WORD_SIZE;
     }

    isEnterKey(code: string):boolean {
        return code=="Enter";
    }

    isBackspaceKey(code: string):boolean{
        return code=="Backspace";
    }

    transformCodeToLetter(code: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    newLetter(code: string):void{
        let letterValue: string = this.transformCodeToLetter(code);
        let letter = new Letra (letterValue);
        this._interface.setNewLetter(this.turn, this.actualPosition, letter.valor);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord.push(letter);
    }

    checkWordIsRight():void{
        if (this._actualWord.map(l => l.valor).join("") === this._pickedWord) {
            location.assign("/winner");
        }
    }

    checkRightLetters = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this._pickedWord[i]==this._actualWord[i].valor){
                this._actualWord[i].setEstadoCorrecta();
                this._interface.changeBackgroundPosition(this._turn, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters(): void {
        let letterCounts: Record<string, number> = {};

        for (let letter of this._pickedWord) {
            letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        }

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            let actualLetter = this._actualWord[i].valor;

            if (this._actualWord[i].esCorrecta()) continue;

            if (this._pickedWord.includes(actualLetter) && letterCounts[actualLetter] > 0) {
                this._actualWord[i].setEstadoMalColocada();
                this._interface.changeBackgroundPosition(this._turn, i, "misplacedLetter");
                letterCounts[actualLetter]--;
            }
        }
    }


    checkWrongLetters(): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (!this._pickedWord.includes(this._actualWord[i].valor) && !this._actualWord[i].esCorrecta()) {
                this._actualWord[i].setEstadoIncorrecta();
                this._interface.changeBackgroundPosition(this._turn, i, "wrongLetter");
            }
        }
    }

    updateAfterANewWord = ():void=>{
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this._turn = this._turn + 1;
        this._actualPosition = 0;
        this._actualWord = [];
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    enterPressed(): void {
        if (this._actualWord.length !== MAX_WORD_SIZE) return;
    
        this.checkWordIsRight();
        if (this._actualWord.map(l => l.valor).join("") === this._pickedWord) return;
        this.checkGameIsOver();
        if (this.turn >= MAX_ATTEMPTS) return; 
    
        this.updateAfterANewWord();
    }
    

    backspacePressed():void{
        if (this._actualPosition > 0) {
            this._actualPosition -= 1;
            this._interface.deleteLetter(this._turn, this._actualPosition);
        }
    }

    newKeyPressed(code: string):void{ 
        if (this.isValidLetter(code)) this.newLetter(code);
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();
        this._interface.changeBackgroundKey(code);
    }

    
}