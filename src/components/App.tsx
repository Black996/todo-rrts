import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../redux/actions";
import { StoreState } from "../redux/reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  color?: string;
}

interface AppState {
  counter: number;
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  onDecrement = (): void => {
    this.setState((prevState) => {
      if (prevState.counter === 0) return { counter: prevState.counter };
      return {
        counter: prevState.counter - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <h3>Count: {this.state.counter}</h3>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
