"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils/utils");
exports.ReportingGroupTypes = utils_1.t({
    EXPENSE: 'expense',
    INCOME: 'income'
});
exports.ReportingTagTypes = utils_1.t({
    STRING: 'string',
    REPORTING_TYPE: 'reporting_type'
});
exports.RuleActionTypes = utils_1.t({
    DELETE: 'delete',
    MODIFY: 'modify',
    ADD_TAGS: 'add_tags',
    REMOVE_TAGS: 'remove_tags'
});
exports.MatchingRuleOperators = utils_1.t({
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    LIKE: '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS: 'contains'
});
exports.MatchingRuleGroupOperators = utils_1.t({
    AND: 'AND',
    OR: 'OR'
});
var OperandTypes = utils_1.t({
    DATE: 'date',
    NUMBER: 'number',
    INPUT: 'input',
    SELECT: 'select'
});
