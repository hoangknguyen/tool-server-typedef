import { ValidationSchema } from 'class-validator';
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
export declare const MATCHING_RULE_VALIDATION_ERRORS: {
    FIELD_EMPTY: string;
    OPERATOR_REQUIRED: string;
    OPERAND_EMPTY: string;
};
export declare const MatchingRuleSchema: ValidationSchema;
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
