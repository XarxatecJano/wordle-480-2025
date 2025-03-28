export abstract class BaseTools<O, S> {
    
    abstract isEqualTo(object: O): boolean;
    abstract isObjectDistinctFrom(verifyObject: S): boolean;
}