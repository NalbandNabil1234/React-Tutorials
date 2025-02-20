import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            todo: '',
            complete: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    toggleTodoComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}