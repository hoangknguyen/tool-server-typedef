import { t } from '../utils/utils';

export const TransactionTypes = t({
    INCOME         : 'income',
    EXPENSE        : 'expense',
    TRANSFER       : 'transfer',
    REFUND         : 'refund',
    SHARE_BILL     : 'sharedBill',
    PAID_FOR_FRIEND: 'paidForFriend',
    LOAN           : 'loan'
});

export type TransactionType = typeof TransactionTypes[keyof typeof TransactionTypes];
