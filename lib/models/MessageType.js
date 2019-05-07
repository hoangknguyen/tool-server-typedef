"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var utils_1 = require("../utils/utils");
var INFO = 'info';
var ERROR = 'error';
var COMPLETE = 'complete';
var DATA = 'data';
var TRANSACTION = 'Transaction';
exports.MessageTypeNames = (_a = {},
    _a[INFO] = INFO,
    _a[ERROR] = ERROR,
    _a[COMPLETE] = COMPLETE,
    _a[DATA] = DATA,
    _a[TRANSACTION] = TRANSACTION,
    _a);
// creating type
var MessageTypes = utils_1.tuple(INFO, ERROR, COMPLETE, DATA, TRANSACTION);
