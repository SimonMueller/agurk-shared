import {
  Card, JokerCard, SuitCard, SuitRank, Color, Suit as CardSuit,
} from '../types/card';

export const JOKER_CARD_KIND = 'JOKER';
export const SUIT_CARD_KIND = 'SUIT';

export enum Suits {
  CLUBS = 'CLUBS',
  SPADES = 'SPADES',
  DIAMONDS = 'DIAMONDS',
  HEARTS = 'HEARTS',
}

export enum Colors {
  RED = 'RED',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export function equals(card1: Card, card2: Card): boolean {
  const rankEquals = card1.rank === card2.rank;

  if (card1.kind === SUIT_CARD_KIND && card2.kind === SUIT_CARD_KIND) {
    return rankEquals && card1.suit === card2.suit;
  }

  if (card1.kind === JOKER_CARD_KIND && card2.kind === JOKER_CARD_KIND) {
    return rankEquals && card1.color === card2.color;
  }

  return false;
}

export const compareRanks = (card1: Card, card2: Card): number => Math.sign(card1.rank - card2.rank);

export const createSuitCard = (rank: SuitRank, suit: CardSuit): SuitCard => ({ rank, suit, kind: SUIT_CARD_KIND });

export const createJokerCard = (color: Color): JokerCard => ({ rank: 15, color, kind: JOKER_CARD_KIND });
