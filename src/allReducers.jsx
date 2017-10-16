import { combineReducers } from "redux";
import ButtonsReducer from "./ButtonsReducer";

const allReducers = combineReducers({
  buttons: ButtonsReducer
});

export default allReducers;
