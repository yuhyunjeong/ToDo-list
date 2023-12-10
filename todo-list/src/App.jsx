import { useState } from "react";
import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoItem from "./component/TodoItem";

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

  console.log(toDoList);

  return (
    <main>
      <div className="container">
        <h1>To Do List</h1>
        <TodoInput addItem={addItem} />

        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {/* add items */}
            {/* array method */}
            {toDoList.map((task, key) => (
              <TodoItem task={task} key={key} deleteItem={deleteItem} />
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;
