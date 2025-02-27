import { Game } from "../core/Game.js";
import { IKeyPressed } from "./IKeyPressed.js";
import { MAX_WORD_SIZE } from "../config/env.js";
import { LetterCheckerFactory } from "../checkers/LetterCheckerFactory.js";
import { WordState } from "../core/WordCheckerData.js";



export class EnterPressed implements IKeyPressed{
    private _game: Game;

    constructor(game: Game){
        this._game = game
    }

    execute():void{

        if (this.wordHasCorrectLength()){
            this.verifyGameState();
            this.updateKeyColors( this._game.actualWord, this._game.pickedWord)
            this.updateAfterANewWord();
        }
        
    }

    updateAfterANewWord() {
        let letterCheckerFactory = LetterCheckerFactory.createCheckers(this._game);
        let wordData = new WordState(this._game.actualWord, this._game.pickedWord, this._game.turn);
        wordData.letterCountMap(this._game.pickedWord)
        letterCheckerFactory.forEach(checker => checker.checkLetters(wordData));
        this.resetWordState();
        
    }

    private wordHasCorrectLength(): boolean {
        return this._game.actualWord.length === MAX_WORD_SIZE;
    }

    private verifyGameState(): void {
        this._game.checkWordIsRight();
        this._game.checkGameIsOver();
    }

    private resetWordState(): void{
        this._game.turn = this._game.turn + 1;
        this._game.actualPosition = 0;
        this._game.actualWord = "";

    }

    private updateKeyColors(word: string, correctWord: string) {
        for (let i = 0; i < word.length; i++) {
            var letter = word[i];
            var code = letter != "Ñ"? "Key" + letter : "Semicolon"
            var state = "default";

            if (correctWord.includes(letter)) {
                state = correctWord[i] === letter ? "rightLetter" : "misplacedLetter";
            }
            this._game.changeBackgroundKey(code, state);
        }
    }

}