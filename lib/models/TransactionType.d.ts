export declare const TransactionTypes: {
    INCOME: "income";
    EXPENSE: "expense";
    TRANSFER: "transfer";
    REFUND: "refund";
    SHARE_BILL: "sharedBill";
    PAID_FOR_FRIEND: "paidForFriend";
    LOAN: "loan";
};
export type TransactionType = typeof TransactionTypes[keyof typeof TransactionTypes];
