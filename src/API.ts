/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
import { Buxfer } from './Buxfer';

export const RuleOperatorNames: RuleOperators = {
    EQUAL             : '=',
    LESS_THAN         : '<',
    GREATER_THAN      : '>',
    LESS_THAN_EQUAL   : '<=',
    LIKE              : '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS          : 'contains'
};

export type RuleOperators = {
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    GREATER_THAN_EQUAL: '>=',
    LIKE: '~',
    CONTAINS: 'contains'
};

export const RuleGroupOperatorNames: RuleGroupOperators = {
    AND: 'AND',
    OR : 'OR'
};

export type RuleGroupOperators = {
    AND: 'AND',
    OR: 'OR'
}

export type RuleOperator = RuleOperators[keyof RuleOperators]
export type GroupRuleOperator = RuleGroupOperators[keyof RuleGroupOperators];

/**
 * Group of tag rules
 */
export interface TagRuleGroup {
    name?: string,
    tags: string[],
    operator: GroupRuleOperator,
    operands: (TagRule | TagRuleGroup)[]
}

/**
 * Interface for tag rule
 */
export interface TagRule {
    name?: string,
    field: keyof Buxfer.Transaction;
    operator: RuleOperator,
    operands: string[]
}
