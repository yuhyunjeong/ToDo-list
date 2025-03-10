# 📝 ToDo-list 📝

[![License: MIT](https://img.shields.io/badge/License-MIT-ffc0cb.svg)](https://opensource.org/licenses/MIT)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

you can try it here! : https://yuhyunjeong.github.io/ToDo-list/


## 💻 Process

### App Component

serves as the entry point to this Todo-List app

### CreateTodo Component

responsible for managing the list of tasks and handling task-related functionality

- update value of input box
- add & delete tasks
- check check boxes
- keep the list on refresh or browser on/off (localStorage)
- drag and drop tasks of list

### ListTodo Component

represents an individual task in Todo-List

## ✅ What I learned

### About React 💡

A JavaScript library for building user interfaces

### Install and Run

```
npx create-react-app [project name]
cd [project name]
npm start
```

### Components

All of the built-in browser components support some props and events

- input

  - onChange: <p></p>
    Fires immediately when the input’s value is changed by the user (for example, it fires on every keystroke)

- form

  - onSubmit

  - event.preventDefault():

    cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

### Hooks

let you use different React features from your components

- useState

  ```
    import { useState } from "react"
  ```

  - State lets a component “remember” information like user input

- useEffect

  ```
    import { useEffect } from "react"
  ```

  - let you synchronize a component with an external system.

### Props

arguments passed into React components via HTML attributes

### Array Methods

One of the most useful in React is the .map() array method

- .map()
  - allows you to run a function on each item in the array, returning a new array as the result

### Spread Operator

JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object

### React icons

```
npm i react-icons
```

https://react-icons.github.io/react-icons/

### React-beautiful-dnd

library for drag and drop

```
npm install react-beautiful-dnd
```

### uuid

Universally Unique Identifier

```
npm install uuid

import { v4 as uuidv4 } from 'uuid';
```

### localStorage

allow you to save key/value pairs in the browser</br>
store data with no expiration date and the data is not deleted when the browser is closed</br>
can only store strings

```
localStorage.setItem("todoList", JSON.stringify(toDoList));

const storedList = JSON.parse(localStorage.getItem("todoList"));
```

### .sr-only

https://css-tricks.com/inclusively-hidden/

using the .sr-only class, we ensure that the form field has an accessible label for screen reader users while remaining visually hidden

```
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

/* Hiding class, making content visible only to screen readers but not visually */
/* "sr" meaning "screen-reader" */

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0); // Specifies the visible region of the element
  clip-path: inset(50%);
  width: 1px; // make it visually hidden
  height: 1px; // make it visually hidden
  overflow: hidden; // Specifies how content that overflows the element's box should be handled
  position: absolute; // Positions the element absolutely, allowing it to be placed at a specific location on the page without affecting other elements
  white-space: nowrap; // Specifies how white space inside the element is handled. It's set to 'nowrap' to ensure the text is displayed on a single line
}
```

### aria-label and aria-hidden

- aria-hidden="true" is used to hide an element and its descendants from assistive technologies such as screen readers. This attribute ensures that the element and its content are not announced to users of assistive technology, while still being visible on the screen.

- aria-label is used to provide a concise label or description for an element. It is typically applied to interactive elements like buttons or links to describe their purpose or action.

```
<button type="submit" aria-label="Add Task">
    <span aria-hidden="true">+</span>
</button>
```

## 🛠️ Trouble Shooting

### Objects are not valid as a react child

- Cause : Passing an Object as a React Child
- Solution : Rendering Object Properties

### Unable to find draggable with id

- Solution : Removing StrictMode in index.js

### github page update

```
npm run deploy

// in package.json
// "predeploy" : "npm run build" +
// "deploy" : "gh-pages -d build"
```
