import React from "react";
import "./App.css";
import CreateTodo from "./component/CreateTodo";

//1. an input box and a button
//2. enter values in the input box and click the button to add items
//3. a delete button

function App() {
  //const [inputValue, setInputValue] = useState(""); // update value

  return (
    // <React.StrictMode>
    <div className="app">
      <CreateTodo />
    </div>
    // </React.StrictMode>
  );
}

export default App;
