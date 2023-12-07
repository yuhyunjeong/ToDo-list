import { useState } from "react";
import "./App.css";
import TodoBoard from "./component/TodoBoard";

//1. an input box and a button
//2. enter values in the input box and click the button to add items
//3. a delete button

function App() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const addItem = () => {
    console.log("i'm here!", inputValue);
    setToDoList([...toDoList, inputValue]); //spread operator
  };
  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      {/* event.target.value : update the state variable on any edits */}
      <button onClick={addItem}>add</button>
      <TodoBoard toDoList={toDoList} /> {/* props */}
    </main>
  );
}

export default App;
