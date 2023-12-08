import React, { useState } from "react";

const TodoInput = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
    // event.target.value : update the state variable on any edits
  }

  function handleAddItem(event) {
    event.preventDefault();
    addItem(inputValue);
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
