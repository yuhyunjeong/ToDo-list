import React, { useState } from "react";

const TodoInput = ({ addItem }) => {
  const [inputValue, setInputValue] = useState(""); // update value

  console.log("inputValue: ", inputValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
    // event.target.value : update the state variable on any edits
  }

  function handleAddItem(event) {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    addItem(inputValue);
    setInputValue(""); // initialize input box
  }

  return (
    <form className="inputField" onSubmit={handleAddItem}>
      <input
        value={inputValue}
        type="text"
        placeholder="Add Tasks!"
        onChange={handleInputValue}
      />

      <button>+</button>
    </form>
  );
};

export default TodoInput;
