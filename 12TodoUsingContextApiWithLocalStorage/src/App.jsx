import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoContextProvider } from "./ContextApi/TodoContext"
import React, { useEffect, useState } from "react"

function App() {
  const [Todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? todo : eachTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id))
  }

  const toggleTodoComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? { ...eachTodo, complete: !eachTodo.complete } : eachTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(Todos))
  }, [Todos])
  return (
    <TodoContextProvider value={{ Todos, addTodo, updateTodo, deleteTodo, toggleTodoComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => (
            <div key={todo.id} className="w-full">
            <TodoItem todo={todo}/>
            </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
