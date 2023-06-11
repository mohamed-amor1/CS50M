import React from "react";
import { render } from "react-dom";
import "./index.css";

const styles = {
  fontFamily: "Quicksand",
};

let id = 0;

const Todo = (props) => (
  <div className="container d-flex justify-content-center">
    <div className="container">
      <li style={{ listStyleType: "none" }}>
        <div
          className="row align-items-center"
          style={{
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "20px",
            marginLeft: "-35px",
          }}
        >
          <div className="col-9 pl-3">
            <input
              type="checkbox"
              checked={props.todo.checked}
              onChange={props.onToggle}
            />
            <span style={{ fontSize: "1.5em", marginLeft: "10px" }}>
              {props.todo.text}
            </span>
          </div>
          <div className="col-3 text-right pr-0">
            <button
              style={{
                borderRadius: "20px",
                maxWidth: "fit-content",
              }}
              className="btn btn-danger"
              onClick={props.onDelete}
            >
              delete
            </button>
          </div>
        </div>
      </li>
    </div>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo() {
    const text = prompt("TODO text please!");
    if (text) {
      this.setState({
        todos: [...this.state.todos, { id: id++, text: text, checked: false }],
      });
    }
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          checked: !todo.checked,
        };
      }),
    });
  }

  render() {
    return (
      <div style={styles}>
        <div>Todo count: {this.state.todos.length}</div>
        <div>
          Unchecked todo count:{" "}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </div>

        <button class="btn btn-secondary" onClick={() => this.addTodo()}>
          Add TODO
        </button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
