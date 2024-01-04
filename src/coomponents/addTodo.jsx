import React, { useState } from "react";
import "./Todo.css";
function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      null;
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>TodoApp</h1> <hr />{" "}
      <div className="todoapp">
        <div className="form">
          {" "}
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="input"
          />
          <button onClick={handleAdd} className="button1">
            Add Todo
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="styled">
              {todo}{" "}
              <button onClick={() => handleDelete(index)} className="button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddTodo;
