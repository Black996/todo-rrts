import React, { Component } from "react";

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends Component<AppProps, AppState> {
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

export default App;
