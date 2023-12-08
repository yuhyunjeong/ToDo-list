import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  console.log("props", props.toDoList);
  return (
    <div>
      {/* add items */}
      {/* array method */}
      {props.toDoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}

export default TodoBoard;
