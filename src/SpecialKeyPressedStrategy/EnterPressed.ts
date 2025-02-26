import { Game } from "../Game";
import { IKeyPressed } from "./IKeyPressed";
import { MAX_WORD_SIZE } from "../env.js";

export class EnterPressed implements IKeyPressed{
    private _game: Game;

    constructor(game: Game){
        this._game = game;
    }

    execute():void{

        if (this._game.actualWord.length == MAX_WORD_SIZE){
                    this._game.checkWordIsRight();
                    this._game.checkGameIsOver();
                    this.updateKeyColors(this._game.actualWord, this._game.pickedWord)
                    this._game.updateAfterANewWord();
        }
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