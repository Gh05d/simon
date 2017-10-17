import { combineReducers } from "redux";
import ButtonsReducer from "./ButtonsReducer";

const allReducers = combineReducers({
  game: ButtonsReducer
});

export default allReducers;
