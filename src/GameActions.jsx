import * as types from "./constants";

export function reset() {
  const action = {
    type: types.RESET
  };

  return action;
}

export function addMove(move) {
  const action = {
    type: types.ADD_MOVE,
    payload: {
      move
    }
  };

  return action;
}

export function addPlayerMove(move) {
  const action = {
    type: types.ADD_PLAYER_MOVE,
    payload: {
      move
    }
  };

  return action;
}

export function setActive(button) {
  const action = {
    type: types.SET_ACTIVE,
    payload: {
      active: button
    }
  };

  return action;
}

export function nullPlayerCount() {
  return { type: types.NULL_PLAYER_COUNT };
}

export function win() {
  return { type: types.WIN };
}

export function mistake(msg) {
  const action = {
    type: types.MISTAKE,
    payload: msg
  };

  return action;
}
