"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
/**
 * To make the compiler infer literal types, you had to pass your object through a function with appropriately
 * crafted generic type parameters, this one seems to do the trick for this case.
 * @param o the constant object
 */
function t(o) {
    return o;
}
exports.t = t;
