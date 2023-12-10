import React from "react";
import "./App.css";
import TodoList from "./component/TodoList";

//1. an input box and a button
//2. enter values in the input box and click the button to add items
//3. a delete button

function App() {
  //const [inputValue, setInputValue] = useState(""); // update value

  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

export default App;
