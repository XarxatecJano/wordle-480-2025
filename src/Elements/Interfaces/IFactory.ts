export interface IFactory<T, O> {
    create(object?: T): O   
}