export interface IModifiable<O> {
    set(object: O): void
}

export interface IModifiableExtended<O> {
    add(amount: O): void;
    subtract(amount: O): void;
}