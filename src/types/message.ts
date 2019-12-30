import { OutPlayer, PlayerId } from './player';
import { Card } from './card';
import { TurnError, ValidatedTurn } from './turn';
import { Penalty } from './penalty';
import { Error } from './communication';

export type Message = BroadcastPlayers | StartGame | BroadcastStartGame | DealtCards | BroadcastPlayerOrder |
  RequestCards | PlayCards | BroadcastPlayerTurn | BroadcastPlayerTurnError | BroadcastRoundWinner |
  BroadcastPenalties | BroadcastOutPlayers | BroadcastGameWinner | BroadcastStartRound | BroadcastEndRound |
  BroadcastStartCycle | BroadcastEndCycle | BroadcastStartPlayerTurn | BroadcastGameError | BroadcastEndGame;

export interface BroadcastPlayers {
  readonly name: 'BROADCAST_PLAYERS';
  readonly data: PlayerId[];
}

export interface StartGame {
  readonly name: 'START_GAME';
}

export interface BroadcastStartGame {
  readonly name: 'BROADCAST_START_GAME';
}

export interface DealtCards {
  readonly name: 'DEALT_CARDS';
  readonly data: Card[];
}

export interface BroadcastPlayerOrder {
  readonly name: 'BROADCAST_PLAYER_ORDER';
  readonly data: PlayerId[];
}

export interface RequestCards {
  readonly name: 'REQUEST_CARDS';
}

export interface PlayCards {
  readonly name: 'PLAY_CARDS';
  readonly data: Card[];
}

export interface BroadcastPlayerTurn {
  readonly name: 'BROADCAST_PLAYER_TURN';
  readonly data: ValidatedTurn;
}

export interface BroadcastPlayerTurnError {
  readonly name: 'BROADCAST_PLAYER_TURN_ERROR';
  readonly data: TurnError;
}

export interface BroadcastRoundWinner {
  readonly name: 'BROADCAST_ROUND_WINNER';
  readonly data: PlayerId;
}

export interface BroadcastPenalties {
  readonly name: 'BROADCAST_PENALTIES';
  readonly data: Penalty[];
}

export interface BroadcastOutPlayers {
  readonly name: 'BROADCAST_OUT_PLAYERS';
  readonly data: OutPlayer[];
}

export interface BroadcastGameWinner {
  readonly name: 'BROADCAST_GAME_WINNER';
  readonly data: PlayerId;
}

export interface BroadcastStartRound {
  readonly name: 'BROADCAST_START_ROUND';
}

export interface BroadcastEndRound {
  readonly name: 'BROADCAST_END_ROUND';
}

export interface BroadcastStartCycle {
  readonly name: 'BROADCAST_START_CYCLE';
}

export interface BroadcastStartPlayerTurn {
  readonly name: 'BROADCAST_START_PLAYER_TURN';
  readonly data: PlayerId;
}

export interface BroadcastEndCycle {
  readonly name: 'BROADCAST_END_CYCLE';
}

export interface BroadcastEndGame {
  readonly name: 'BROADCAST_END_GAME';
}

export interface BroadcastGameError {
  readonly name: 'BROADCAST_GAME_ERROR';
  readonly data: Error;
}
