"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@utils/utils");
exports.TransactionTypes = utils_1.t({
    INCOME: 'income',
    EXPENSE: 'expense',
    TRANSFER: 'transfer',
    REFUND: 'refund',
    SHARE_BILL: 'sharedBill',
    PAID_FOR_FRIEND: 'paidForFriend',
    LOAN: 'loan'
});
