import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export let rootReducerUsers = combineReducers({
  userReducer,
});
