"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUIT_CARD_KIND = exports.JOKER_CARD_KIND = exports.Suits = exports.Colors = exports.createSuitCard = exports.cardEquals = exports.compareRanks = exports.createJokerCard = exports.MessageName = void 0;
const messageName_1 = __importDefault(require("./communication/messageName"));
exports.MessageName = messageName_1.default;
var card_1 = require("./game/card");
Object.defineProperty(exports, "createJokerCard", { enumerable: true, get: function () { return card_1.createJokerCard; } });
Object.defineProperty(exports, "compareRanks", { enumerable: true, get: function () { return card_1.compareRanks; } });
Object.defineProperty(exports, "cardEquals", { enumerable: true, get: function () { return card_1.equals; } });
Object.defineProperty(exports, "createSuitCard", { enumerable: true, get: function () { return card_1.createSuitCard; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return card_1.Colors; } });
Object.defineProperty(exports, "Suits", { enumerable: true, get: function () { return card_1.Suits; } });
Object.defineProperty(exports, "JOKER_CARD_KIND", { enumerable: true, get: function () { return card_1.JOKER_CARD_KIND; } });
Object.defineProperty(exports, "SUIT_CARD_KIND", { enumerable: true, get: function () { return card_1.SUIT_CARD_KIND; } });
