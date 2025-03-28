import { Letter } from "../Letter/Letter";

export interface ILetterCondition {

    checkCondition(userLetter: Letter, targetLetter: Letter, result: Letter): boolean
}