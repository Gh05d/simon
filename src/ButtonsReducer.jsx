import * as types from "./constants";

const INITIALSTATE = {
  power: false,
  strict: false,
  count: "--",
  game: false,
  clickable: false,
  moves: [],
  playerMoves: [],
  playerCount: 0,
  active: ""
};

export default function(state = INITIALSTATE, action) {
  switch (action.type) {
    case types.TOGGLE_POWER:
      if (state.power) {
        return INITIALSTATE;
      } else return { ...state, power: true, clickable: true };

    case types.STRICT_MODE:
      if (state.power) {
        return { ...state, strict: !state.strict };
      } else return state;

    case types.START_GAME:
      if (state.power) {
        return {
          ...state,
          count: 1,
          game: true,
          moves: action.payload.moves,
          active: action.payload.moves[0]
        };
      } else return INITIALSTATE;

    case types.RESET:
      let saveStrict = state.strict;
      return { ...INITIALSTATE, power: true, strict: saveStrict };

    case types.ADD_MOVE:
      return {
        ...state,
        moves: [...state.moves, action.payload.move],
        count: state.count + 1
      };

    case types.ADD_PLAYER_MOVE:
      return {
        ...state,
        playerMoves: [...state.playerMoves, action.payload.move],
        playerCount: state.playerCount + 1
      };

    case types.SET_ACTIVE:
      return { ...state, active: action.payload.active };

    case types.NULL_PLAYER_COUNT:
      return { ...state, playerCount: 0, playerMoves: [] };

    case types.WIN:
      return { ...INITIALSTATE, count: "WIN", power: true };

    case types.MISTAKE:
      return { ...state, count: action.payload };

    case types.CLICKABLE:
      return { ...state, clickable: !state.clickable };

    default:
      return state;
  }
}
