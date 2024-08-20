import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListTodo from "./ListTodo";
import { v4 as uuidv4 } from "uuid";

function CreateTodo() {
  const [task, setTask] = useState(""); // update value
  const [toDoList, setToDoList] = useState(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  ); // Keep list on refresh and update list

  const [selectAll, setSelectAll] = useState(false);

  console.log("task: ", task);

  // Load from localStorage on mount
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todoList")) || [];
    setToDoList(storedList);
  }, []);

  // Save to localStorage whenever toDoList changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(toDoList));
  }, [toDoList]);

  function handleInputValue(event) {
    setTask(event.target.value);
    // event.target.value : update the state variable on any edits
  }

  const addTask = (taskName) => {
    console.log("i'm here!", taskName);
    const newTask = { id: uuidv4().toString(), taskName, checked: false };

    //setToDoList([...toDoList, newTask]); //spread operator
    setToDoList((prevList) => [...prevList, newTask]);
  };

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask(""); // initialize input box
  }

  function toggleCheck(id) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) => ({ ...task, checked: !selectAll }))
    );
  };

  const deleteChecked = () => {
    setToDoList(toDoList.filter((task) => !task.checked));
    setSelectAll(false); // initialize all checkbox
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedList = Array.from(toDoList);
    const [movedItem] = updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, movedItem);

    setToDoList(updatedList);
  };

  console.log(toDoList);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form className="inputField" onSubmit={handleAddTask}>
        <label htmlFor="taskInput" className="sr-only">
          Input Task:
        </label>
        <input
          id="taskInput"
          value={task}
          type="text"
          placeholder="Add Tasks!"
          onChange={handleInputValue}
        />

        {/*aria-hidden="true" hides the element itself
          aria-label provides a description for the element*/}
        <button type="submit" aria-label="Add Task">
          <span aria-hidden="true">+</span>
        </button>
      </form>

      <div className="toDoList">
        <div className="check">
          <span className="all-check">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
              id="selectAll"
            />
            <label htmlFor="selectAll">Select All</label>
          </span>

          {/*<span style={{ paddingLeft: "15px" }}>To Do</span>*/}

          <span className="delete">
            <RiDeleteBin5Line
              className="delete-icon"
              onClick={deleteChecked}
              aria-label="Delete Checked Tasks"
            />
            delete
          </span>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="toDoList">
            {(provided) => (
              <ul
                className="list-items"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* add items */}
                {/* array method */}
                {toDoList.map((task, index) => (
                  <ListTodo
                    task={task}
                    key={task.id}
                    index={index}
                    toggleCheck={toggleCheck}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        {toDoList.length === 0 ? (
          <p className="notify">You can rest :)</p>
        ) : null}
      </div>
    </div>
  );
}

export default CreateTodo;
