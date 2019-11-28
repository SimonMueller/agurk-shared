"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("@hapi/joi");
const card_1 = require("../game/card");
exports.BROADCAST_PLAYERS = {
    name: 'BROADCAST_PLAYERS',
    validationSchema: joi_1.any().forbidden(),
};
exports.START_GAME = {
    name: 'START_GAME',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_START_GAME = {
    name: 'BROADCAST_START_GAME',
    validationSchema: joi_1.any().forbidden(),
};
exports.DEAL_CARDS = {
    name: 'DEAL_CARDS',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_PLAYER_ORDER = {
    name: 'BROADCAST_PLAYER_ORDER',
    validationSchema: joi_1.any().forbidden(),
};
exports.REQUEST_CARDS = {
    name: 'REQUEST_CARDS',
    validationSchema: joi_1.any().forbidden(),
};
exports.PLAYED_CARDS = {
    name: 'PLAYED_CARDS',
    validationSchema: joi_1.array().items(joi_1.object().keys({
        rank: joi_1.number().valid([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).required(),
        suit: joi_1.string().valid(card_1.Suits.HEARTS, card_1.Suits.CLUBS, card_1.Suits.DIAMONDS, card_1.Suits.SPADES),
        color: joi_1.string().valid(card_1.Colors.BLACK, card_1.Colors.RED, card_1.Colors.WHITE),
        kind: joi_1.string().valid(card_1.CardKind.Suit, card_1.CardKind.Joker).required(),
    }).xor('suit', 'color')).min(1).max(7),
};
exports.BROADCAST_PLAYER_TURN = {
    name: 'BROADCAST_PLAYER_TURN',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_PLAYER_TURN_ERROR = {
    name: 'BROADCAST_PLAYER_TURN_ERROR',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_ROUND_WINNER = {
    name: 'BROADCAST_ROUND_WINNER',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_PENALTIES = {
    name: 'BROADCAST_PENALTIES',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_OUT_PLAYERS = {
    name: 'BROADCAST_OUT_PLAYERS',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_GAME_WINNER = {
    name: 'BROADCAST_GAME_WINNER',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_START_ROUND = {
    name: 'BROADCAST_START_ROUND',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_END_ROUND = {
    name: 'BROADCAST_END_ROUND',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_START_CYCLE = {
    name: 'BROADCAST_START_CYCLE',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_START_PLAYER_TURN = {
    name: 'BROADCAST_START_PLAYER_TURN',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_END_CYCLE = {
    name: 'BROADCAST_END_CYCLE',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_END_GAME = {
    name: 'BROADCAST_END_GAME',
    validationSchema: joi_1.any().forbidden(),
};
exports.ERROR = {
    name: 'ERROR',
    validationSchema: joi_1.any().forbidden(),
};
exports.BROADCAST_GAME_ERROR = {
    name: 'BROADCAST_GAME_ERROR',
    validationSchema: joi_1.any().forbidden(),
};
