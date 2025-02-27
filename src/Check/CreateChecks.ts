import { Game } from "../Game";
import { CheckCorrectLetters } from "./CheckCorrectLetters.js";
import { CheckMisplacedLetters } from "./CheckMisplacedLetters.js";
import { CheckWrongLetters } from "./CheckWrongLetters.js";
import { ICheck } from "./ICheck";

export class CreateChecks{
    private static instance: CreateChecks;
    static getInstance(){
        if(!CreateChecks.instance){
            CreateChecks.instance = new CreateChecks();
        }
        return CreateChecks.instance;
    }

    check(game: Game): ICheck[]{
        let strategies: ICheck[] = [new CheckCorrectLetters(game),
            new CheckMisplacedLetters(game),
            new CheckWrongLetters(game)
        ];
        return strategies;
    }
}