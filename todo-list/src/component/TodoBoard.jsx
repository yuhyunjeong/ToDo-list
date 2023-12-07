import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  console.log("props", props.toDoList);
  return (
    <div>
      <h1>TodoList</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoBoard;
