import { tuple } from '../utils/utils';
const INCOME = 'income';
const EXPENSE = 'expense';
const TRANSFER = 'transfer';
const REFUND = 'refund';
const SHARE_BILL = 'sharedBill';
const PAID_FOR_FRIEND = 'paidForFriend';
const LOAN = 'loan';

const BuxferAccountTypes = tuple(INCOME, EXPENSE, TRANSFER, REFUND, SHARE_BILL, PAID_FOR_FRIEND, LOAN);

export type BuxferAccountType = (typeof BuxferAccountTypes)[number];

export const BuxferAccountTypeNames: { [k in BuxferAccountType]: k } = {
    [INCOME]         : INCOME,
    [EXPENSE]        : EXPENSE,
    [TRANSFER]       : TRANSFER,
    [REFUND]         : REFUND,
    [SHARE_BILL]     : SHARE_BILL,
    [PAID_FOR_FRIEND]: PAID_FOR_FRIEND,
    [LOAN]           : LOAN
};
