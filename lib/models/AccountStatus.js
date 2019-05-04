"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var utils_1 = require("../utils/utils");
var PENDING = 'pending';
var CLEARED = 'cleared';
// creating type
var AccountStatuses = utils_1.tuple(PENDING, CLEARED);
exports.AccountStatusNames = (_a = {},
    _a[PENDING] = PENDING,
    _a[CLEARED] = CLEARED,
    _a);
