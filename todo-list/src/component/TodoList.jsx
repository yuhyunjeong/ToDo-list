import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [inputValue, setInputValue] = useState(""); // update value

  console.log("inputValue: ", inputValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
    // event.target.value : update the state variable on any edits
  }

  const [toDoList, setToDoList] = useState([]); // update list

  const addItem = (taskName) => {
    console.log("i'm here!", taskName);
    const newTask = { taskName, checked: false };

    setToDoList([...toDoList, newTask]); //spread operator
  };

  function deleteItem(deleteItemName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteItemName));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  console.log(toDoList);

  function handleAddItem(event) {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    addItem(inputValue);
    setInputValue(""); // initialize input box
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form className="inputField" onSubmit={handleAddItem}>
        <input
          value={inputValue}
          type="text"
          placeholder="Add Tasks!"
          onChange={handleInputValue}
        />

        <button>+</button>
      </form>
      <div className="toDoList">
        <span>To Do</span>

        <ul className="list-items">
          {/* add items */}
          {/* array method */}
          {toDoList.map((task, key) => (
            <TodoItem
              task={task}
              key={key}
              deleteItem={deleteItem}
              toggleCheck={toggleCheck}
            />
          ))}
        </ul>

        {toDoList.length === 0 ? <p className="notify">You can rest!</p> : null}
      </div>
    </div>
  );
}

export default TodoList;
