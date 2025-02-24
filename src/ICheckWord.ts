import { Game } from "./Game";

export interface ICheckWord{
    check(actualWord:string, pickedWord:string):void;
}