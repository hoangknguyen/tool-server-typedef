export declare const tuple: <T extends string[]>(...args: T) => T;
/**
 * To make the compiler infer literal types, you had to pass your object through a function with appropriately
 * crafted generic type parameters, this one seems to do the trick for this case.
 * @param o the constant object
 */
export declare function t<V extends string, T extends {
    [key in string]: V;
}>(o: T): T;
