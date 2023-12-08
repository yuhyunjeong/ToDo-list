import { useState } from "react";
import "./App.css";
import TodoBoard from "./component/TodoBoard";
import TodoInput from "./component/TodoInput";

//1. an input box and a button
//2. enter values in the input box and click the button to add items
//3. a delete button

function App() {
  //const [inputValue, setInputValue] = useState(""); // update value

  const [toDoList, setToDoList] = useState([]); // update list

  const addItem = (taskName) => {
    console.log("i'm here!", taskName);
    const newTask = { taskName, checked: false };

    setToDoList([...toDoList, newTask.taskName]); //spread operator
  };

  return (
    <main>
      <div className="container">
        <h1>To Do List</h1>
        <TodoInput addItem={addItem} />
        <TodoBoard toDoList={toDoList} /> {/* props */}
      </div>
    </main>
  );
}

export default App;
