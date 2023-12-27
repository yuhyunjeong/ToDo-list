//import { RiDeleteBin5Line } from "react-icons/ri";
import { Draggable } from "react-beautiful-dnd";

function ListTodo({ task, index, deleteItem, toggleCheck }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="items"
        >
          <div className="items-text">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleCheck(task.id)}
            />
            <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
          </div>

          {/*<RiDeleteBin5Line
            className="delete-icon"
            onClick={() => deleteItem(task.id)}
      />*/}
        </li>
      )}
    </Draggable>
  );
}

export default ListTodo;
