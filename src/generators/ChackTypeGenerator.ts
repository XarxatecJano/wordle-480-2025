import { CheckTypeMisplaced } from "../check/CheckTypeMisplaced.js";
import { CheckTypeRight } from "../check/CheckTypeRight.js";
import { CheckTypeWrong } from "../check/CheckTypeWrong.js";
import { ICheckType } from "../interfaces/ICheckType.js";
import { WordManager } from "../managers/WordManager.js";
import { IGenerator } from "../interfaces/IGenerator.js";

export class CheckTypeGenerator implements IGenerator<WordManager, ICheckType[]>{
    
    generate(parameter: WordManager): ICheckType[] {
        const checkTypeRight: CheckTypeRight = new CheckTypeRight(parameter)
        const checkTypeMisplaced: CheckTypeMisplaced = new CheckTypeMisplaced(parameter)
        const checkTypeWrong: CheckTypeWrong = new CheckTypeWrong(parameter)
        const checkTypes: ICheckType[] = [checkTypeRight, checkTypeMisplaced, checkTypeWrong]
        return checkTypes
    }

}