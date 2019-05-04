"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var utils_1 = require("../utils/utils");
var HSBC = 'HSBC';
var VIETCOMBANK = 'VIETCOMBANK';
exports.SyncAccountTypeNames = (_a = {},
    _a[HSBC] = HSBC,
    _a[VIETCOMBANK] = VIETCOMBANK,
    _a);
// creating type
var SyncAccountTypes = utils_1.tuple(HSBC, VIETCOMBANK);
