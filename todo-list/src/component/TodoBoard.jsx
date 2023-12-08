import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  console.log("props", props);
  return (
    <div className="toDoList">
      <span>To Do</span>
      <ul className="list-items">
        {/* add items */}
        {/* array method */}
        {props.toDoList.map((item) => (
          <TodoItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoBoard;
