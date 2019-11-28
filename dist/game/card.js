"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardKind;
(function (CardKind) {
    CardKind["Joker"] = "JOKER";
    CardKind["Suit"] = "SUIT";
})(CardKind = exports.CardKind || (exports.CardKind = {}));
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
    if (card1.kind === CardKind.Suit && card2.kind === CardKind.Suit) {
        return rankEquals && card1.suit === card2.suit;
    }
    if (card1.kind === CardKind.Joker && card2.kind === CardKind.Joker) {
        return rankEquals && card1.color === card2.color;
    }
    return false;
}
exports.equals = equals;
exports.compareRanks = (card1, card2) => Math.sign(card1.rank - card2.rank);
exports.createSuitCard = (rank, suit) => ({ rank, suit, kind: CardKind.Suit });
exports.createJokerCard = (color) => ({ rank: 15, color, kind: CardKind.Joker });
