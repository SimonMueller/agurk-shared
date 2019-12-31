import { Card, JokerCard, SuitCard, SuitRank, Color, Suit as CardSuit } from '../types/card';
export declare const JOKER_CARD_KIND = "JOKER";
export declare const SUIT_CARD_KIND = "SUIT";
export declare enum Suits {
    CLUBS = "CLUBS",
    SPADES = "SPADES",
    DIAMONDS = "DIAMONDS",
    HEARTS = "HEARTS"
}
export declare enum Colors {
    RED = "RED",
    BLACK = "BLACK",
    WHITE = "WHITE"
}
export declare function equals(card1: Card, card2: Card): boolean;
export declare const compareRanks: (card1: Card, card2: Card) => number;
export declare const createSuitCard: (rank: SuitRank, suit: CardSuit) => SuitCard;
export declare const createJokerCard: (color: Color) => JokerCard;
