import * as types from "./constants";

export function togglePower() {
  const action = {
    type: types.TOGGLE_POWER
  };

  return action;
}

export function startGame(move) {
  const action = {
    type: types.START_GAME,
    payload: {
      moves: [move]
    }
  };

  return action;
}

export function strictMode() {
  const action = {
    type: types.STRICT_MODE
  };

  return action;
}
