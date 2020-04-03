import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(a => ({ count: a.count - 1 }));
  };
  componentDidMount() {
    console.log("component render");
  }
  componentDidUpdate() {
    console.log("im just update");
  }
  render() {
    console.log("imrendering");
    return (
      <div>
        <h1>The numboer is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
