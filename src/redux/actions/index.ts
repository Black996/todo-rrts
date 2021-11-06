import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import ActionTypes from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

const URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response: AxiosResponse<Todo[]> = await axios.get(URL);

  dispatch<FetchTodosAction>({
    type: ActionTypes.FETCH_TODOS,
    payload: response.data,
  });
};
