import ActionTypes from "../actions/types";
import { FetchTodosAction, Todo } from "../actions";

const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todosReducer;
