import logo from "./logo.svg";
import "./App.css";

//1. an input box and a button
//2. enter values in the input box and click the button to add items
//3. a delete button

function App() {
  return (
    <main>
      <input
        type="text"
        onChange={(event) => console.log(event.target.value)}
      />
      {/* event.target.value : update the state variable on any edits */}
      <button>add</button>
    </main>
  );
}

export default App;
