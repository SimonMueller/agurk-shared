declare enum MessageName {
    REQUEST_AUTHENTICATION = "REQUEST_AUTHENTICATION",
    AUTHENTICATE = "AUTHENTICATE",
    BROADCAST_PLAYERS = "BROADCAST_PLAYERS",
    START_GAME = "START_GAME",
    BROADCAST_START_GAME = "BROADCAST_START_GAME",
    REQUEST_CARDS = "REQUEST_CARDS",
    BROADCAST_START_PLAYER_TURN = "BROADCAST_START_PLAYER_TURN",
    AVAILABLE_CARDS_IN_HAND = "AVAILABLE_CARDS_IN_HAND",
    PLAY_CARDS = "PLAY_CARDS",
    BROADCAST_PLAYER_TURN = "BROADCAST_PLAYER_TURN",
    BROADCAST_START_ROUND = "BROADCAST_START_ROUND",
    BROADCAST_END_ROUND = "BROADCAST_END_ROUND",
    BROADCAST_START_CYCLE = "BROADCAST_START_CYCLE",
    BROADCAST_END_CYCLE = "BROADCAST_END_CYCLE",
    BROADCAST_END_GAME = "BROADCAST_END_GAME"
}
export default MessageName;
