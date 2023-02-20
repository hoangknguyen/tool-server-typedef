"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = exports.APIErrorResponse = exports.FieldTypes = void 0;
/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
var utils_1 = require("./utils/utils");
// we could configure the field type inside a property file
// this is just to be used as a constant in the UI
exports.FieldTypes = (0, utils_1.t)({
    ARRAY: 'array',
    STRING: 'string',
    NUMBER: 'number',
    DATE: 'date',
    BOOLEAN: 'boolean'
});
/**
 * The model that represents an API error
 */
var APIErrorResponse = /** @class */ (function () {
    function APIErrorResponse(code, type, message) {
        this.code = code;
        this.type = type;
        this.message = message;
    }
    return APIErrorResponse;
}());
exports.APIErrorResponse = APIErrorResponse;
var APIResponse = /** @class */ (function () {
    function APIResponse(data, success) {
        if (success === void 0) { success = true; }
        this.data = data;
        this.success = success;
    }
    return APIResponse;
}());
exports.APIResponse = APIResponse;
