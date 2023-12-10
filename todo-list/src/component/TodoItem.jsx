import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoItem = ({ task, deleteItem }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" />
        <p>{task.taskName}</p>
      </div>
      <RiDeleteBin5Line
        className="delete-icon"
        onClick={() => deleteItem(task.taskName)}
      />
    </li>
  );
};

export default TodoItem;
