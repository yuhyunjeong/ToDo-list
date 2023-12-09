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
        {props.toDoList.map((task, key) => (
          <TodoItem task={task} key={key} />
        ))}
      </ul>

      {props.toDoList.length === 0 ? (
        <p className="notify">You are done!</p>
      ) : null}
    </div>
  );
}

export default TodoBoard;
