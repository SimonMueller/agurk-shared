import {
  compareRanks as compareCardRanks, createJokerCard, createSuitCard, equals as cardEquals, Colors, Suits,
} from '../../src/game/card';
import { Card } from '../../src/types/card';

describe('card equals', () => {
  test('same suit and rank', () => {
    const card1: Card = createSuitCard(7, Suits.SPADES);
    const card2: Card = createSuitCard(7, Suits.SPADES);

    expect(cardEquals(card1, card2)).toBe(true);
  });

  test('different suit and rank', () => {
    const card1: Card = createJokerCard(Colors.BLACK);
    const card2: Card = createSuitCard(7, Suits.HEARTS);

    expect(cardEquals(card1, card2)).toBe(false);
  });

  test('same suit but different rank', () => {
    const card1: Card = createSuitCard(7, Suits.SPADES);
    const card2: Card = createSuitCard(14, Suits.SPADES);

    expect(cardEquals(card1, card2)).toBe(false);
  });

  test('same rank but different suit', () => {
    const card1: Card = createSuitCard(7, Suits.SPADES);
    const card2: Card = createSuitCard(7, Suits.DIAMONDS);

    expect(cardEquals(card1, card2)).toBe(false);
  });

  test('same joker', () => {
    const card1: Card = createJokerCard(Colors.BLACK);
    const card2: Card = createJokerCard(Colors.BLACK);

    expect(cardEquals(card1, card2)).toBe(true);
  });

  test('different joker', () => {
    const card1: Card = createJokerCard(Colors.BLACK);
    const card2: Card = createJokerCard(Colors.RED);

    expect(cardEquals(card1, card2)).toBe(false);
  });
});

describe('compare card rank (ignore suit or color)', () => {
  test('lower rank different suit', () => {
    const card1: Card = createSuitCard(7, Suits.DIAMONDS);
    const card2: Card = createSuitCard(11, Suits.CLUBS);

    expect(compareCardRanks(card1, card2)).toBeLessThan(0);
  });

  test('higer rank different suit', () => {
    const card1: Card = createSuitCard(14, Suits.HEARTS);
    const card2: Card = createSuitCard(3, Suits.SPADES);

    expect(compareCardRanks(card1, card2)).toBeGreaterThan(0);
  });

  test('same rank different color', () => {
    const card1: Card = createJokerCard(Colors.RED);
    const card2: Card = createJokerCard(Colors.BLACK);

    expect(compareCardRanks(card1, card2)).toEqual(0);
  });

  test('lower rank than joker', () => {
    const card1: Card = createSuitCard(2, Suits.HEARTS);
    const card2: Card = createJokerCard(Colors.BLACK);

    expect(compareCardRanks(card1, card2)).toBeLessThan(0);
  });

  test('same rank different suit', () => {
    const card1: Card = createSuitCard(6, Suits.CLUBS);
    const card2: Card = createSuitCard(6, Suits.CLUBS);

    expect(compareCardRanks(card1, card2)).toEqual(0);
  });
});
