import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initialize the count state to 0
    };
  }

  increaseCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 })); // Update the count state by incrementing it by 1
    this.setState((prevState) => ({ count: prevState.count + 1 })); // Update the count state by incrementing it by 1
    console.log(this.state.count);
  }

  render() {
    return (
      <div style={styles}>
        <div>
          {/* Button to increase the count */}
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        {/* Display the current count */}
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

let count = 0; // Initialize the count variable

render(
  // Render the App component with the initial count value
  <App count={count++} />,
  document.getElementById("root")
);
