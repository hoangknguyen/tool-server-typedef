"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
exports.RuleOperatorNames = {
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    LIKE: '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS: 'contains'
};
exports.RuleGroupOperatorNames = {
    AND: 'AND',
    OR: 'OR'
};
exports.TAG_RULE_GROUP_VALIDATION_ERRORS = {
    NAME_REQUIRED: 'Rule Group name is required.',
    TAGS_EMPTY: 'Tags must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY: 'Operands must not be empty.'
};
exports.TagRuleGroupSchema = {
    name: 'tagRuleGroupSchema',
    properties: {
        name: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.NAME_REQUIRED
            }],
        tags: [{
                type: class_validator_1.ValidationTypes.ARRAY_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.TAGS_EMPTY
            }],
        operator: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.OPERATOR_REQUIRED
            }],
        operands: [{
                type: class_validator_1.ValidationTypes.ARRAY_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.OPERAND_EMPTY
            }]
    }
};
exports.TAG_RULE_VALIDATION_ERRORS = {
    FIELD_EMPTY: 'Field must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY: 'Operands must not be empty.'
};
exports.TagRuleSchema = {
    name: 'tagRuleSchema',
    properties: {
        field: [{
                type: class_validator_1.ValidationTypes.ARRAY_NOT_EMPTY,
                message: exports.TAG_RULE_VALIDATION_ERRORS.FIELD_EMPTY
            }],
        operator: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TAG_RULE_VALIDATION_ERRORS.OPERATOR_REQUIRED
            }],
        operands: [{
                type: class_validator_1.ValidationTypes.ARRAY_NOT_EMPTY,
                message: exports.TAG_RULE_VALIDATION_ERRORS.OPERAND_EMPTY
            }]
    }
};
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
