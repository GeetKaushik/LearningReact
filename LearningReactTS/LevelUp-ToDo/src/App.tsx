import React, { useState } from "react"
import "./App.css"
import InputField from "./components/InputField"
import TodoList from "./components/TodoList"
import { ToDo } from "./model"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("")
  const [todos, setTodos] = useState<ToDo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todos) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">LevelUp-ToDo</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}
export default App
