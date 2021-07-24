import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  console.log(props.todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={props.todos}
            setTodos={props.setTodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
