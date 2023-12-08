import React from "react";

function TodoItem(items) {
  return (
    <li className="items">
      
      <div className="items-text">
        <input type="checkbox" />
        {items.item}
      </div>
    </li>
  );
}

export default TodoItem;
