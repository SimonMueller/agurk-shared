import createMessage from '../../src/communication/message';
import MessageName from '../../src/communication/messageName';
import { createSuitCard, Suits } from '../../src/game/card';
import { OutPlayer, PlayerId } from '../../src/types/player';
import { Penalty } from '../../src/types/penalty';
import { Card } from '../../src/types/card';
import { TurnError, ValidatedTurn } from '../../src/types/turn';

describe('create message', () => {
  test('broadcast players game message with type and players data', () => {
    const players: PlayerId[] = ['player'];

    expect(createMessage(MessageName.BROADCAST_PLAYERS, players))
      .toEqual({
        name: MessageName.BROADCAST_PLAYERS,
        data: players,
      });
  });

  test('broadcast start game message with only type', () => {
    expect(createMessage(MessageName.BROADCAST_START_GAME))
      .toEqual({
        name: MessageName.BROADCAST_START_GAME,
      });
  });

  test('broadcast game error message with type and game error data', () => {
    const error = { error: 'something is wrong' };

    expect(createMessage(MessageName.BROADCAST_GAME_ERROR, error))
      .toEqual({
        name: MessageName.BROADCAST_GAME_ERROR,
        data: error,
      });
  });


  test('deal cards message with type and cards data', () => {
    const cards: Card[] = [createSuitCard(2, Suits.DIAMONDS)];

    expect(createMessage(MessageName.DEAL_CARDS, cards))
      .toEqual({
        name: MessageName.DEAL_CARDS,
        data: cards,
      });
  });

  test('broadcast player order message with type and player order data', () => {
    const players: PlayerId[] = ['player1', 'player2'];

    expect(createMessage(MessageName.BROADCAST_PLAYER_ORDER, players))
      .toEqual({
        name: MessageName.BROADCAST_PLAYER_ORDER,
        data: players,
      });
  });

  test('request cards message with only type', () => {
    expect(createMessage(MessageName.REQUEST_CARDS))
      .toEqual({
        name: MessageName.REQUEST_CARDS,
      });
  });

  test('played cards message with type and played cards data', () => {
    const cards: Card[] = [createSuitCard(2, Suits.CLUBS)];

    expect(createMessage(MessageName.PLAYED_CARDS, cards))
      .toEqual({
        name: MessageName.PLAYED_CARDS,
        data: cards,
      });
  });

  test('broadcast turn played message with type and turn data', () => {
    const turn: ValidatedTurn = { cards: [createSuitCard(2, Suits.HEARTS)], playerId: 'test', valid: true };

    expect(createMessage(MessageName.BROADCAST_PLAYER_TURN, turn))
      .toEqual({
        name: MessageName.BROADCAST_PLAYER_TURN,
        data: turn,
      });
  });

  test('broadcast error turn message with type and turn error including player id', () => {
    const turnError: TurnError = { message: 'an error in a player turn occured', playerId: 'test' };

    expect(createMessage(MessageName.BROADCAST_PLAYER_TURN_ERROR, turnError))
      .toEqual({
        name: MessageName.BROADCAST_PLAYER_TURN_ERROR,
        data: turnError,
      });
  });

  test('broadcast round winner message with type and winner data', () => {
    const winner: PlayerId = 'player2';

    expect(createMessage(MessageName.BROADCAST_ROUND_WINNER, winner))
      .toEqual({
        name: MessageName.BROADCAST_ROUND_WINNER,
        data: winner,
      });
  });

  test('broadcast penalties message with type and penalties data', () => {
    const penalties: Penalty[] = [{ playerId: 'tester', card: createSuitCard(12, Suits.HEARTS) }];

    expect(createMessage(MessageName.BROADCAST_PENALTIES, penalties))
      .toEqual({
        name: MessageName.BROADCAST_PENALTIES,
        data: penalties,
      });
  });

  test('broadcast out players message with type and out players data', () => {
    const outPlayers: OutPlayer[] = [{ id: 'outPlayer', reason: 'cheating' }];

    expect(createMessage(MessageName.BROADCAST_OUT_PLAYERS, outPlayers))
      .toEqual({
        name: MessageName.BROADCAST_OUT_PLAYERS,
        data: outPlayers,
      });
  });

  test('broadcast game winner message with type and game winner data', () => {
    const winner: PlayerId = 'player2';

    expect(createMessage(MessageName.BROADCAST_GAME_WINNER, winner))
      .toEqual({
        name: MessageName.BROADCAST_GAME_WINNER,
        data: winner,
      });
  });

  test('broadcast end round message with only type', () => {
    expect(createMessage(MessageName.BROADCAST_END_ROUND))
      .toEqual({
        name: MessageName.BROADCAST_END_ROUND,
      });
  });

  test('broadcast end game message with only type', () => {
    expect(createMessage(MessageName.BROADCAST_END_GAME))
      .toEqual({
        name: MessageName.BROADCAST_END_GAME,
      });
  });

  test('broadcast end cycle message with only type', () => {
    expect(createMessage(MessageName.BROADCAST_END_CYCLE))
      .toEqual({
        name: MessageName.BROADCAST_END_CYCLE,
      });
  });

  test('broadcast start round message with only type', () => {
    expect(createMessage(MessageName.BROADCAST_START_ROUND))
      .toEqual({
        name: MessageName.BROADCAST_START_ROUND,
      });
  });

  test('broadcast start cycle message with only type', () => {
    expect(createMessage(MessageName.BROADCAST_START_CYCLE))
      .toEqual({
        name: MessageName.BROADCAST_START_CYCLE,
      });
  });

  test('broadcast start player turn message with type and data', () => {
    const playerId = 'someplayer';

    expect(createMessage(MessageName.BROADCAST_START_PLAYER_TURN, playerId))
      .toEqual({
        name: MessageName.BROADCAST_START_PLAYER_TURN,
        data: playerId,
      });
  });

  test('error message with type and error data', () => {
    const error = { error: 'something is wrong' };

    expect(createMessage(MessageName.ERROR, error))
      .toEqual({
        name: MessageName.ERROR,
        data: error,
      });
  });

  test('start game message with only type', () => {
    expect(createMessage(MessageName.START_GAME))
      .toEqual({
        name: MessageName.START_GAME,
      });
  });
});
