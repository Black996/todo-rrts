import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import ActionTypes from "./types";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: ToDo[];
}

const URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response: AxiosResponse<ToDo[]> = await axios.get(URL);

  dispatch<FetchTodosAction>({
    type: ActionTypes.FETCH_TODOS,
    payload: response.data,
  });
};
