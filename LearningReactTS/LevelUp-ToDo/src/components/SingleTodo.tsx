import React, { useEffect, useRef, useState } from "react"
import { ToDo } from "../model"
import "./styles.css"
import { FaEdit } from "react-icons/fa"
import { MdDelete, MdOutlineDone } from "react-icons/md"

type Props = {
  todo: ToDo
  todos: ToDo[]
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string | number>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)))
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((t) => (todo.id === id ? { ...todo, todo: editTodo } : t))
    )
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])


  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref = {inputRef}
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <FaEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  )
}
export default SingleTodo
