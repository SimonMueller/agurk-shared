enum MessageName {
  REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION',
  AUTHENTICATE = 'AUTHENTICATE',
  START_GAME = 'START_GAME',
  BROADCAST_START_GAME = 'BROADCAST_START_GAME',
  BROADCAST_OUT_PLAYER_AFTER_TURN = 'BROADCAST_OUT_PLAYER_AFTER_TURN',
  REQUEST_CARDS = 'REQUEST_CARDS',
  BROADCAST_START_PLAYER_TURN = 'BROADCAST_START_PLAYER_TURN',
  AVAILABLE_CARDS_IN_HAND = 'AVAILABLE_CARDS_IN_HAND',
  PLAY_CARDS = 'PLAY_CARDS',
  BROADCAST_PLAYER_TURN = 'BROADCAST_PLAYER_TURN',
  BROADCAST_START_ROUND = 'BROADCAST_START_ROUND',
  BROADCAST_END_ROUND = 'BROADCAST_END_ROUND',
  BROADCAST_START_CYCLE = 'BROADCAST_START_CYCLE',
  BROADCAST_END_CYCLE = 'BROADCAST_END_CYCLE',
  BROADCAST_END_GAME = 'BROADCAST_END_GAME',
  BROADCAST_LOBBY_PLAYERS = 'BROADCAST_LOBBY_PLAYERS',
}

export default MessageName;
