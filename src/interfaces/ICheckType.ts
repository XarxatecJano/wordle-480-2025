import { WordManager } from "../managers/WordManager"

export interface ICheckType{

    _wordManager: WordManager

    check( wordCheck: number[] ): number[]
    
}