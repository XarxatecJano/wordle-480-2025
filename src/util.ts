import { SEMICOLON } from "./env.js";

export class Util{

    static transformCodeToLetter(code: string, split: string):string{
        return code.split(split)[1];
    }   

    static getRandomWord(_words: string[]):string {
        const min = 0;
        const max = _words.length - 1;
        return _words[Math.floor(Math.random() * (max - min + 1))]
    }

    static semicolonCheck( code: string ): string{
        if(code == SEMICOLON){ code = "Ñ" }
        return code
    }
}