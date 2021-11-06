import React from "react";

interface AppProps {
  title: string;
  id: number;
  handleTodoDelete(id: number): void;
}

export const TodoItem = ({
  title,
  id,
  handleTodoDelete,
}: AppProps): JSX.Element => {
  return <li onClick={() => handleTodoDelete(id)}>{title}</li>;
};
