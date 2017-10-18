//Constants for the buttons
export const START_GAME = "START_GAME";
export const STRICT_MODE = "STRICT_MODE";
export const TOGGLE_POWER = "TOGGLE_POWER";
export const RESET = "RESET";
export const CLICKABLE = "CLICKABLE";

//Constants for playing the game
export const ADD_MOVE = "ADD_MOVE";
export const ADD_PLAYER_MOVE = "ADD_PLAYER_MOVE";
export const SET_ACTIVE = "SET_ACTIVE";
export const NULL_PLAYER_COUNT = "NULL_PLAYER_COUNT";
export const WIN = "WIN";
export const MISTAKE = "MISTAKE";

//The buttons and possible moves of the game
export const moves = ["upperLeft", "lowerLeft", "upperRight", "lowerRight"];
export const buttons = [
  { value: "upperLeft", id: "upper-left", color: "red" },
  { value: "lowerLeft", id: "lower-left", color: "blue" },
  { value: "upperRight", id: "upper-right", color: "#7CFC00" },
  { value: "lowerRight", id: "lower-right", color: "yellow" }
];
