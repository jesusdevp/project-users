import { combineReducers } from "redux";
import { getUsers, getUserById } from "./userReducer";

export default combineReducers({ getUsers, getUserById });
