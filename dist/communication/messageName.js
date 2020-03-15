"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageName;
(function (MessageName) {
    MessageName["BROADCAST_PLAYERS"] = "BROADCAST_PLAYERS";
    MessageName["START_GAME"] = "START_GAME";
    MessageName["BROADCAST_START_GAME"] = "BROADCAST_START_GAME";
    MessageName["REQUEST_CARDS"] = "REQUEST_CARDS";
    MessageName["BROADCAST_START_PLAYER_TURN"] = "BROADCAST_START_PLAYER_TURN";
    MessageName["AVAILABLE_CARDS_IN_HAND"] = "AVAILABLE_CARDS_IN_HAND";
    MessageName["PLAY_CARDS"] = "PLAY_CARDS";
    MessageName["BROADCAST_PLAYER_TURN"] = "BROADCAST_PLAYER_TURN";
    MessageName["BROADCAST_PLAYER_TURN_ERROR"] = "BROADCAST_PLAYER_TURN_ERROR";
    MessageName["BROADCAST_START_ROUND"] = "BROADCAST_START_ROUND";
    MessageName["BROADCAST_END_ROUND"] = "BROADCAST_END_ROUND";
    MessageName["BROADCAST_START_CYCLE"] = "BROADCAST_START_CYCLE";
    MessageName["BROADCAST_END_CYCLE"] = "BROADCAST_END_CYCLE";
    MessageName["BROADCAST_END_GAME"] = "BROADCAST_END_GAME";
    MessageName["BROADCAST_GAME_ERROR"] = "BROADCAST_GAME_ERROR";
})(MessageName || (MessageName = {}));
exports.default = MessageName;
