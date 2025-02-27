import { GameLogic } from "../Game/GameLogic";
import { CheckCorrectLetters } from "./CheckCorrectLetters.js";
import { CheckMisplacedLetters } from "./CheckMisplacedLetters.js";
import { ICheck } from "./ICheck";

export class CreateChecks{
    private static instance: CreateChecks;
    static getInstance(){
        if(!CreateChecks.instance){
            CreateChecks.instance = new CreateChecks();
        }
        return CreateChecks.instance;
    }

    check(game: GameLogic): ICheck[]{
        let strategies: ICheck[] = [new CheckCorrectLetters(game),
            new CheckMisplacedLetters(game),
        ];
        return strategies;
    }
}