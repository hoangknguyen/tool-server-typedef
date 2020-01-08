/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
import { ValidationSchema } from 'class-validator';
import { Buxfer } from './Buxfer';
export declare const FieldTypes: {
    ARRAY: "array";
    STRING: "string";
    NUMBER: "number";
    DATE: "date";
    BOOLEAN: "boolean";
};
export declare type FieldType = typeof FieldTypes[keyof typeof FieldTypes];
export declare const RuleActionTypes: {
    DELETE: "delete";
    MODIFY: "modify";
    ADD_TAGS: "add_tags";
    REMOVE_TAGS: "remove_tags";
};
export declare type RuleActionType = typeof RuleActionTypes[keyof typeof RuleActionTypes];
export declare const MatchingRuleOperators: {
    EQUAL: "=";
    LESS_THAN: "<";
    GREATER_THAN: ">";
    LESS_THAN_EQUAL: "<=";
    LIKE: "~";
    GREATER_THAN_EQUAL: ">=";
    CONTAINS: "contains";
};
export declare type MatchingRuleOperator = typeof MatchingRuleOperators[keyof typeof MatchingRuleOperators];
export declare const MatchingRuleGroupOperators: {
    AND: "AND";
    OR: "OR";
};
export declare type MatchingRuleGroupOperator = typeof MatchingRuleGroupOperators[keyof typeof MatchingRuleGroupOperators];
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
export declare type ReportItem = {
    name: string;
    transactions: Buxfer.ExpandedTransaction[];
    total: number;
    reportingType: ReportingGroupType;
};
/**
 * Group of tag rules
 */
export interface MatchingRuleGroup {
    name?: string;
    tags: string[];
    operator: MatchingRuleGroupOperator;
    operands: (MatchingRule | MatchingRuleGroup)[];
    actions?: Action<Buxfer.Transaction, any>[];
}
export declare const MATCHING_RULE_GROUP_VALIDATION_ERRORS: {
    NAME_REQUIRED: string;
    TAGS_EMPTY: string;
    OPERATOR_REQUIRED: string;
    OPERAND_EMPTY: string;
};
export declare const MATCHING_RULE_GROUP_VALIDATION_GROUPS: {
    NESTED: string;
    ROOT: string;
};
export declare const MatchingRuleGroupSchema: ValidationSchema;
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
export interface MatchingRule {
    name?: string;
    field: keyof Buxfer.Transaction;
    operator: MatchingRuleOperator;
    operands: string[];
}
export declare const MATCHING_RULE_VALIDATION_ERRORS: {
    FIELD_EMPTY: string;
    OPERATOR_REQUIRED: string;
    OPERAND_EMPTY: string;
};
export declare const MatchingRuleSchema: ValidationSchema;
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
export declare const ReportingGroupTypes: {
    EXPENSE: "expense";
    INCOME: "income";
};
export declare const ReportingTagTypes: {
    STRING: "string";
    REPORTING_TYPE: "reporting_type";
};
export declare type ReportingGroup = {
    name: string;
    includeTags: ReportingTag[];
    excludeTags: ReportingTag[];
    reportingType: ReportingGroupType;
};
export declare type ReportingTag = {
    name: string;
    tagType: string;
};
export declare type ReportingGroupType = typeof ReportingGroupTypes[keyof typeof ReportingGroupTypes];
export declare type ReportingTagType = typeof ReportingTagTypes[keyof typeof ReportingTagTypes];
/**
 * BUXFER API request/response models
 */
export declare type SaveBuxferConfigurationRequest = {
    userId: string;
    matchingRuleGroups: MatchingRuleGroup[];
};
