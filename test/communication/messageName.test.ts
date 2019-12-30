import MessageName from '../../src/communication/messageName';

test('message types exist and correct name', () => {
  expect(MessageName.BROADCAST_PLAYERS).toEqual('BROADCAST_PLAYERS');
  expect(MessageName.START_GAME).toEqual('START_GAME');
  expect(MessageName.BROADCAST_START_GAME).toEqual('BROADCAST_START_GAME');
  expect(MessageName.DEAL_CARDS).toEqual('DEALT_CARDS');
  expect(MessageName.BROADCAST_PLAYER_ORDER).toEqual('BROADCAST_PLAYER_ORDER');
  expect(MessageName.REQUEST_CARDS).toEqual('REQUEST_CARDS');
  expect(MessageName.REQUEST_CARDS).toEqual('REQUEST_CARDS');
  expect(MessageName.BROADCAST_START_PLAYER_TURN).toEqual('BROADCAST_START_PLAYER_TURN');
  expect(MessageName.PLAYED_CARDS).toEqual('PLAY_CARDS');
  expect(MessageName.BROADCAST_PLAYER_TURN).toEqual('BROADCAST_PLAYER_TURN');
  expect(MessageName.BROADCAST_PLAYER_TURN_ERROR).toEqual('BROADCAST_PLAYER_TURN_ERROR');
  expect(MessageName.BROADCAST_ROUND_WINNER).toEqual('BROADCAST_ROUND_WINNER');
  expect(MessageName.BROADCAST_PENALTIES).toEqual('BROADCAST_PENALTIES');
  expect(MessageName.BROADCAST_OUT_PLAYERS).toEqual('BROADCAST_OUT_PLAYERS');
  expect(MessageName.BROADCAST_GAME_WINNER).toEqual('BROADCAST_GAME_WINNER');
  expect(MessageName.BROADCAST_END_GAME).toEqual('BROADCAST_END_GAME');
  expect(MessageName.BROADCAST_GAME_ERROR).toEqual('BROADCAST_GAME_ERROR');
  expect(MessageName.BROADCAST_END_ROUND).toEqual('BROADCAST_END_ROUND');
  expect(MessageName.BROADCAST_END_CYCLE).toEqual('BROADCAST_END_CYCLE');
  expect(MessageName.BROADCAST_START_ROUND).toEqual('BROADCAST_START_ROUND');
  expect(MessageName.BROADCAST_START_CYCLE).toEqual('BROADCAST_START_CYCLE');
  expect(MessageName.ERROR).toEqual('ERROR');
});
