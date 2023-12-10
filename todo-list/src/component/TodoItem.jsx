import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItem({ task, deleteItem, toggleCheck }) {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <RiDeleteBin5Line
        className="delete-icon"
        onClick={() => deleteItem(task.taskName)}
      />
    </li>
  );
}

export default TodoItem;
