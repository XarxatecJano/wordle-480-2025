export interface IWordProvider {
    getWords(): string[];
    getRandomWord(): string;
}