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
            <label className={task.checked ? "isChecked" : ""}>
              <input
                type="checkbox"
                id={`task${task.id}`}
                checked={task.checked}
                onChange={() => toggleCheck(task.id)}
              />
              <span className="checkmark"></span>

              {task.taskName}
            </label>
            {task.checked && ( // when checked only
              <label htmlFor={`task${task.id}`}>Done</label>
            )}
          </div>
        </li>
      )}
    </Draggable>
  );
}

export default ListTodo;
