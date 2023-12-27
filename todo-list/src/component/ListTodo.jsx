import { Draggable } from "react-beautiful-dnd";

function ListTodo({ task, index, toggleCheck }) {
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
        </li>
      )}
    </Draggable>
  );
}

export default ListTodo;
