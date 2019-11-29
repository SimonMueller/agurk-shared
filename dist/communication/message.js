"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(messageName, data) {
    return {
        name: messageName,
        data,
    };
}
exports.default = create;
