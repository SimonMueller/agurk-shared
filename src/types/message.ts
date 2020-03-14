import { OutPlayer, PlayerId } from './player';
import { Card } from './card';
import { TurnError, ValidatedTurn } from './turn';
import { Penalty } from './penalty';
import { Error } from './communication';

export type Message = StartGame | BroadcastStartGame | DealtCards | RequestCards | PlayCards |
  BroadcastPlayerTurn | BroadcastStartRound | BroadcastEndRound | BroadcastStartCycle | BroadcastPlayerTurnError |
  BroadcastEndCycle | BroadcastStartPlayerTurn | BroadcastGameError | BroadcastEndGame | AvailableCards;

export interface StartGame {
  readonly name: 'START_GAME';
}

export interface BroadcastStartGame {
  readonly name: 'BROADCAST_START_GAME';
  readonly data: {
    readonly players: PlayerId[];
  };
}

export interface DealtCards {
  readonly name: 'DEALT_CARDS';
  readonly data: Card[];
}

export interface RequestCards {
  readonly name: 'REQUEST_CARDS';
}

export interface AvailableCards {
  readonly name: 'AVAILABLE_CARDS';
  readonly data: Card[];
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

export interface BroadcastStartRound {
  readonly name: 'BROADCAST_START_ROUND';
  readonly data: {
    readonly players: PlayerId[];
  };
}

export interface BroadcastEndRound {
  readonly name: 'BROADCAST_END_ROUND';
  readonly data: {
    readonly winner: PlayerId;
    readonly penalties: Penalty[];
    readonly outPlayers: PlayerId[];
  };
}

export interface BroadcastStartCycle {
  readonly name: 'BROADCAST_START_CYCLE';
  readonly data: {
    readonly orderedPlayers: PlayerId[];
  };
}

export interface BroadcastStartPlayerTurn {
  readonly name: 'BROADCAST_START_PLAYER_TURN';
  readonly data: PlayerId;
}

export interface BroadcastEndCycle {
  readonly name: 'BROADCAST_END_CYCLE';
  readonly data: {
    readonly outPlayers: OutPlayer[];
    readonly highestTurnPlayers: PlayerId[];
  };
}

export interface BroadcastEndGame {
  readonly name: 'BROADCAST_END_GAME';
  readonly data: {
    readonly winner: PlayerId;
  };
}

export interface BroadcastGameError {
  readonly name: 'BROADCAST_GAME_ERROR';
  readonly data: Error;
}
