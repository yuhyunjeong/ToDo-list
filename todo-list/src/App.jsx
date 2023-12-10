import { useState } from "react";
import "./App.css";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";

//1. an input box and a button
//2. enter values in the input box and click the button to add items
//3. a delete button

function App() {
  //const [inputValue, setInputValue] = useState(""); // update value

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

  return (
    <main>
      <div className="container">
        <h1>To Do List</h1>
        <TodoItem addItem={addItem} />

        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {/* add items */}
            {/* array method */}
            {toDoList.map((task, key) => (
              <TodoList
                task={task}
                key={key}
                deleteItem={deleteItem}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className="notify">You can rest!</p>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;
