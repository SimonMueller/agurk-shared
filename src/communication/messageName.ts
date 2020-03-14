enum MessageName {
  BROADCAST_PLAYERS = 'BROADCAST_PLAYERS',
  START_GAME = 'START_GAME',
  BROADCAST_START_GAME = 'BROADCAST_START_GAME',
  DEALT_CARDS = 'DEALT_CARDS',
  REQUEST_CARDS = 'REQUEST_CARDS',
  AVAILABLE_CARDS = 'AVAILABLE_CARDS',
  PLAY_CARDS = 'PLAY_CARDS',
  BROADCAST_PLAYER_TURN = 'BROADCAST_PLAYER_TURN',
  BROADCAST_START_ROUND = 'BROADCAST_START_ROUND',
  BROADCAST_END_ROUND = 'BROADCAST_END_ROUND',
  BROADCAST_START_CYCLE = 'BROADCAST_START_CYCLE',
  BROADCAST_START_PLAYER_TURN = 'BROADCAST_START_PLAYER_TURN',
  BROADCAST_END_CYCLE = 'BROADCAST_END_CYCLE',
  BROADCAST_END_GAME = 'BROADCAST_END_GAME',
  BROADCAST_GAME_ERROR = 'BROADCAST_GAME_ERROR',
}

export default MessageName;
