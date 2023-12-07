import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  console.log("props", props.toDoList);
  return (
    <div>
      <h1>TodoList</h1>
      {/* add items */}
      {/* array method */}
      {props.toDoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}

export default TodoBoard;
