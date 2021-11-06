import { combineReducers } from "redux";
import { Todo } from "../actions";
import todosReducer from "./todos";

export interface StoreState {
  todos: Todo[];
}

export default combineReducers<StoreState>({
  todos: todosReducer,
});
