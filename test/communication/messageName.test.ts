import MessageName from '../../src/communication/messageName';

test('message types exist and correct name', () => {
  expect(MessageName.START_GAME).toEqual('START_GAME');
  expect(MessageName.BROADCAST_START_GAME).toEqual('BROADCAST_START_GAME');
  expect(MessageName.BROADCAST_REQUEST_CARDS).toEqual('BROADCAST_REQUEST_CARDS');
  expect(MessageName.AVAILABLE_CARDS_IN_HAND).toEqual('AVAILABLE_CARDS_IN_HAND');
  expect(MessageName.PLAY_CARDS).toEqual('PLAY_CARDS');
  expect(MessageName.BROADCAST_PLAYER_TURN).toEqual('BROADCAST_PLAYER_TURN');
  expect(MessageName.BROADCAST_PLAYER_TURN_ERROR).toEqual('BROADCAST_PLAYER_TURN_ERROR');
  expect(MessageName.BROADCAST_END_GAME).toEqual('BROADCAST_END_GAME');
  expect(MessageName.BROADCAST_GAME_ERROR).toEqual('BROADCAST_GAME_ERROR');
  expect(MessageName.BROADCAST_END_ROUND).toEqual('BROADCAST_END_ROUND');
  expect(MessageName.BROADCAST_END_CYCLE).toEqual('BROADCAST_END_CYCLE');
  expect(MessageName.BROADCAST_START_ROUND).toEqual('BROADCAST_START_ROUND');
  expect(MessageName.BROADCAST_START_CYCLE).toEqual('BROADCAST_START_CYCLE');
});
