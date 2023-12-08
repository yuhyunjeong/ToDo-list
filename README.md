# ToDo-list

## ✅ What I learned

### Install React app

npx create-react-app [project name]

### Components

All of the built-in browser components support some props and events.

- input
  - onChange: <p>
    An Event handler function. <p>
    Required for controlled inputs. <p>
    Fires immediately when the input’s value is changed by the user (for example, it fires on every keystroke). <p>
    Behaves like the browser input event.

### Hooks

Hooks let you use different React features from your components.

- State Hooks
  - State lets a component “remember” information like user input.
  - import { useState } from "react";

### Props

arguments passed into React components via HTML attributes.

like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

### Array Methods

One of the most useful in React is the .map() array method.

- .map()
  - allows you to run a function on each item in the array, returning a new array as the result.
  - So, map() can be used to generate lists.

### Spread Operator

The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object

## 🛠️ TroubleShooting

### Objects are not valid as a react child

- Cause : Passing an Object as a React Child
- Solution : Rendering Object Properties
