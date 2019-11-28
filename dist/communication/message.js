"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/prefer-default-export
function create(messageType, data) {
    return {
        type: messageType.name,
        data,
    };
}
exports.create = create;
