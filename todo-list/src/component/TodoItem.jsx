import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItem(items) {
  return (
    <li className="items">
      
      <div className="items-text">
        <input type="checkbox" />
        {items.task}
      </div>
      <RiDeleteBin5Line class="delete-icon" />
    </li>
  );
}

export default TodoItem;
