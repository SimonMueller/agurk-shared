"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JOKER_CARD_KIND = 'JOKER';
exports.SUIT_CARD_KIND = 'SUIT';
var Suits;
(function (Suits) {
    Suits["CLUBS"] = "CLUBS";
    Suits["SPADES"] = "SPADES";
    Suits["DIAMONDS"] = "DIAMONDS";
    Suits["HEARTS"] = "HEARTS";
})(Suits = exports.Suits || (exports.Suits = {}));
var Colors;
(function (Colors) {
    Colors["RED"] = "RED";
    Colors["BLACK"] = "BLACK";
    Colors["WHITE"] = "WHITE";
})(Colors = exports.Colors || (exports.Colors = {}));
function equals(card1, card2) {
    const rankEquals = card1.rank === card2.rank;
    if (card1.kind === exports.SUIT_CARD_KIND && card2.kind === exports.SUIT_CARD_KIND) {
        return rankEquals && card1.suit === card2.suit;
    }
    if (card1.kind === exports.JOKER_CARD_KIND && card2.kind === exports.JOKER_CARD_KIND) {
        return rankEquals && card1.color === card2.color;
    }
    return false;
}
exports.equals = equals;
exports.compareRanks = (card1, card2) => Math.sign(card1.rank - card2.rank);
exports.createSuitCard = (rank, suit) => ({ rank, suit, kind: exports.SUIT_CARD_KIND });
exports.createJokerCard = (color) => ({ rank: 15, color, kind: exports.JOKER_CARD_KIND });
