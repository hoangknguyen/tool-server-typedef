"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStatuses = void 0;
var utils_1 = require("../utils/utils");
// creating type
exports.AccountStatuses = utils_1.t({
    PENDING: 'pending',
    CLEARED: 'cleared',
    COMPLETED: 'completed'
});
