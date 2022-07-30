import React, { useState, useRef } from 'react'
import { Todolist } from './Todolist'
import { v4 as uuidv4 } from 'uuid'
import './app.css'

function App() {
  const [todos, setTodos] = useState([{}])
  const addRef = useRef()

function addTodo(event) {
  const taskName = addRef.current.value
  if (taskName){
    setTodos(oldTodos => {
      return [...oldTodos, { id: uuidv4(), name: taskName, isComplete: false}]
    })
    addRef.current.value = null
  }else{
    return null
  }
}

function checkBox(id) {
  const newStuff = [...todos]
  const todo = newStuff.find(specificItem => specificItem.id === id)
  todo.isComplete = !todo.isComplete
  setTodos(newStuff)
}

function clearTodos(){
  const newTodos = todos.filter(todo => !todo.isComplete)
  setTodos(newTodos)
}

  return (
    <>
    <div className="flex-column margin-top">
      <Todolist todos={todos} checkBox={checkBox}/>
      <input ref={addRef} type="text" />
      <div className="flex-row">     
      <button onClick={addTodo}>Add Item</button>
      <button onClick={clearTodos}>Clear All</button>
      </div>
      <div>Left To Do: {todos.length}</div>
      </div>
    </>
  );
}

export default App;
