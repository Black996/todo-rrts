import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../redux/actions";
import { StoreState } from "../redux/reducers";
import { TodoItem } from "./TodoItem";

// interface AppProps {
//   todos: Todo[];
//   fetchTodos(): Promise<void>;
//   deleteTodo(): typeof deleteTodo;
// }

interface AppState {
  fetching: boolean;
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (prevProps.todos !== this.props.todos) {
      this.setState((prevState) => {
        return { fetching: false };
      });
    }
  }

  onButtonClick = (): void => {
    // if (this.state.count !== 0) return;
    this.props.fetchTodos();
    this.setState((prevState) => {
      return { fetching: true };
    });
  };

  handleClick = (id: number) => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos
      .slice(0, 50)
      .map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          handleTodoDelete={this.handleClick}
        />
      ));
  };

  render() {
    console.log(this.state.fetching);

    return (
      <div>
        <h2>To Do List:</h2>
        <button onClick={this.onButtonClick}>Fetch List</button>
        {this.state.fetching ? <h1>Loading!</h1> : <ul>{this.renderList()}</ul>}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const mapDispatchToProps = { fetchTodos, deleteTodo };

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export const App = connector(_App);
