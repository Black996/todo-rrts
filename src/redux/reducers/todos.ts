import { Action, Todo, ActionTypes } from "../actions";

const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todosReducer;
