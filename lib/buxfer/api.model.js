"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperandTypes = exports.MatchingRuleGroupOperators = exports.MatchingRuleOperators = exports.RuleActionTypes = exports.ReportingTagTypes = exports.ReportingGroupTypes = void 0;
var utils_1 = require("../utils/utils");
exports.ReportingGroupTypes = (0, utils_1.t)({
    EXPENSE: 'expense',
    INCOME: 'income'
});
exports.ReportingTagTypes = (0, utils_1.t)({
    STRING: 'string',
    REPORTING_TYPE: 'reporting_type'
});
exports.RuleActionTypes = (0, utils_1.t)({
    DELETE: 'delete',
    MODIFY: 'modify',
    ADD_TAGS: 'add_tags',
    REMOVE_TAGS: 'remove_tags'
});
exports.MatchingRuleOperators = (0, utils_1.t)({
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    LIKE: '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS: 'contains'
});
exports.MatchingRuleGroupOperators = (0, utils_1.t)({
    AND: 'AND',
    OR: 'OR'
});
exports.OperandTypes = (0, utils_1.t)({
    DATE: 'date',
    NUMBER: 'number',
    INPUT: 'input',
    SELECT: 'select',
    LIST: 'list'
});
