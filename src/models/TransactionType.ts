import { tuple } from '../utils/utils';
const INCOME = 'income';
const EXPENSE = 'expense';
const TRANSFER = 'transfer';
const REFUND = 'refund';
const SHARE_BILL = 'sharedBill';
const PAID_FOR_FRIEND = 'paidForFriend';
const LOAN = 'loan';

const TransactionTypes = tuple(INCOME, EXPENSE, TRANSFER, REFUND, SHARE_BILL, PAID_FOR_FRIEND, LOAN);

export type TransactionType = (typeof TransactionTypes)[number];

export const TransactionTypeNames: { [k in TransactionType]: k } = {
    [INCOME]         : INCOME,
    [EXPENSE]        : EXPENSE,
    [TRANSFER]       : TRANSFER,
    [REFUND]         : REFUND,
    [SHARE_BILL]     : SHARE_BILL,
    [PAID_FOR_FRIEND]: PAID_FOR_FRIEND,
    [LOAN]           : LOAN
};
