"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEvents = exports.MessageTypes = void 0;
var utils_1 = require("../utils/utils");
exports.MessageTypes = utils_1.t({
    INFO: 'info',
    ERROR: 'error',
    COMPLETE: 'complete',
    DATA: 'data',
    TRANSACTION: 'transaction'
});
exports.SocketEvents = utils_1.t({
    DATA: 'data',
    MESSAGE: 'message'
});
