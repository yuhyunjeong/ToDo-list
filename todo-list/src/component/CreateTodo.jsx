import React, { useState, useEffect } from "react";
import ListTodo from "./ListTodo";
import { v4 as uuidv4 } from "uuid";

function CreateTodo({ tasks, setTasks }) {
  const [task, setTask] = useState(""); // update value
  const [toDoList, setToDoList] = useState([]); // update list

  console.log("task: ", task);

  function handleInputValue(event) {
    setTask(event.target.value);
    // event.target.value : update the state variable on any edits
  }

  const addItem = (taskName) => {
    console.log("i'm here!", taskName);
    const newTask = { id: uuidv4(), taskName, checked: false };

    setToDoList([...toDoList, newTask]); //spread operator
  };

  function handleAddItem(event) {
    event.preventDefault();
    if (task.trim() === "") return;
    addItem(task);
    setTask(""); // initialize input box
  }

  function deleteItem(id) {
    setToDoList(toDoList.filter((task) => task.id !== id));
  }

  function toggleCheck(id) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  console.log(toDoList);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form className="inputField" onSubmit={handleAddItem}>
        <input
          value={task}
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
            <ListTodo
              task={task}
              key={task.id}
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

export default CreateTodo;
