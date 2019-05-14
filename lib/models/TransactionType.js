"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var utils_1 = require("../utils/utils");
var INCOME = 'income';
var EXPENSE = 'expense';
var TRANSFER = 'transfer';
var REFUND = 'refund';
var SHARE_BILL = 'sharedBill';
var PAID_FOR_FRIEND = 'paidForFriend';
var LOAN = 'loan';
var TransactionTypes = utils_1.tuple(INCOME, EXPENSE, TRANSFER, REFUND, SHARE_BILL, PAID_FOR_FRIEND, LOAN);
exports.TransactionTypeNames = (_a = {},
    _a[INCOME] = INCOME,
    _a[EXPENSE] = EXPENSE,
    _a[TRANSFER] = TRANSFER,
    _a[REFUND] = REFUND,
    _a[SHARE_BILL] = SHARE_BILL,
    _a[PAID_FOR_FRIEND] = PAID_FOR_FRIEND,
    _a[LOAN] = LOAN,
    _a);
