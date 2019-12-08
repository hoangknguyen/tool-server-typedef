/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
import { ValidationSchema } from 'class-validator';
import { Buxfer } from './Buxfer';
export declare const RuleActionTypes: {
    DELETE: "delete";
    MODIFY: "modify";
    ADD_TAGS: "add_tags";
    REMOVE_TAGS: "remove_tags";
};
export declare type RuleActionType = typeof RuleActionTypes[keyof typeof RuleActionTypes];
export declare const RuleOperators: {
    EQUAL: "=";
    LESS_THAN: "<";
    GREATER_THAN: ">";
    LESS_THAN_EQUAL: "<=";
    LIKE: "~";
    GREATER_THAN_EQUAL: ">=";
    CONTAINS: "contains";
};
export declare type RuleOperator = typeof RuleOperators[keyof typeof RuleOperators];
export declare const RuleGroupOperators: {
    AND: "AND";
    OR: "OR";
};
export declare type GroupRuleOperator = typeof RuleGroupOperators[keyof typeof RuleGroupOperators];
export declare type Action<O, T> = {
    data?: T;
    order?: number;
    t?: RuleActionType;
    doAction(o: O, chain: ActionChain<O>): O | undefined;
};
export interface ActionChain<O> {
    doAction(o: O): O | undefined;
    hasNext(): boolean;
}
/**
 * The model represents the action of the user on the transaction. Each action
 * includes a property for the field name and a property for the field value
 */
export interface FieldModifier {
    field: keyof Buxfer.Transaction;
    value: Buxfer.Transaction[keyof Buxfer.Transaction];
}
/**
 * Group of tag rules
 */
export interface TagRuleGroup {
    name?: string;
    tags: string[];
    operator: GroupRuleOperator;
    operands: (TagRule | TagRuleGroup)[];
    actions?: Action<Buxfer.Transaction, any>[];
}
export declare const TAG_RULE_GROUP_VALIDATION_ERRORS: {
    NAME_REQUIRED: string;
    TAGS_EMPTY: string;
    OPERATOR_REQUIRED: string;
    OPERAND_EMPTY: string;
};
export declare const TAG_RULE_GROUP_VALIDATION_GROUPS: {
    NESTED: string;
    ROOT: string;
};
export declare const TagRuleGroupSchema: ValidationSchema;
export declare const TRANSACTION_VALIDATION_ERRORS: {
    DATE_REQUIRED: string;
    STATUS_REQUIRED: string;
    TAGS_IS_ARRAY: string;
    DESCRIPTION_REQUIRED: string;
    TYPE_REQUIRED: string;
    ACCOUNT_TYPE_REQUIRED: string;
    AMOUNT_REQUIRED: string;
    AMOUNT_IS_NUMBER: string;
};
export declare const TRANSACTION_VALIDATION_GROUPS: {
    BASIC: string;
    FULL: string;
};
export declare const TransactionSchema: ValidationSchema;
/**
 * Interface for tag rule
 */
export interface TagRule {
    name?: string;
    field: keyof Buxfer.Transaction;
    operator: RuleOperator;
    operands: string[];
}
export declare const TAG_RULE_VALIDATION_ERRORS: {
    FIELD_EMPTY: string;
    OPERATOR_REQUIRED: string;
    OPERAND_EMPTY: string;
};
export declare const TagRuleSchema: ValidationSchema;
/**
 * The model that represents an API error
 */
export declare class APIErrorResponse {
    code: number;
    type: string;
    message: string;
    constructor(code: number, type: string, message: string);
}
export declare class APIResponse<T> {
    data: T;
    success: boolean;
    constructor(data: T, success?: boolean);
}
export interface User {
    name: string;
    password: string;
    email: string;
    username: string;
    salt: string;
    roles: string[];
}
