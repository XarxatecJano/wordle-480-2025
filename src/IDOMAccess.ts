export interface IDOMAccess {
    getELementById(id: string): HTMLElement | null;
    getElementsByClassName(classname: string): HTMLCollectionOf<Element>;
}