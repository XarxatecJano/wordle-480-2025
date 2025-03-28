export interface IGenerator <I, T> {

    generate( parameter: I ) : T;

}