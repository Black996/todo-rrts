import React from "react";

interface AppProps {
  title: string;
}

export const TodoItem = ({ title }: AppProps) => {
  return <li>{title}</li>;
};
