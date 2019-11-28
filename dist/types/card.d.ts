export declare type Color = 'RED' | 'BLACK' | 'WHITE';
export declare type Suit = 'SPADES' | 'CLUBS' | 'DIAMONDS' | 'HEARTS';
export declare type SuitRank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
export declare type JokerRank = 15;
export declare type Rank = SuitRank | JokerRank;
export interface SuitCard {
    readonly kind: 'SUIT';
    readonly rank: SuitRank;
    readonly suit: Suit;
}
export interface JokerCard {
    readonly kind: 'JOKER';
    readonly rank: JokerRank;
    readonly color: Color;
}
export declare type Card = JokerCard | SuitCard;
