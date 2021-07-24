import React from "react";

const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    if (e.target.value === undefined) {
      alert("Please enter a string or any value");
    } else {
      props.setTodos([
        ...props.todos,
        { text: props.inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    props.setInputText("");
  };
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
