import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../redux/actions";
import { StoreState } from "../redux/reducers";
import { TodoItem } from "./TodoItem";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  color?: string;
}

class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos
      .slice(0, 100)
      .map((todo: Todo) => <TodoItem key={todo.id} title={todo.title} />);
  };

  render() {
    console.log(this.props.todos);

    return (
      <div>
        <h2>To Do List:</h2>
        <button onClick={this.onButtonClick}>Fetch List</button>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
