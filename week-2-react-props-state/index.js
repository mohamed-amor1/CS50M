import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = () => (
  <div style={styles}>
    <h2>Start editing to see some magic happen</h2>
  </div>
);

render(<App />, document.getElementById("root"));
