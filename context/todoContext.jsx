import { createContext } from "react";

export const TodoContext = createContext({
     todo: [] ,
     completeTodo: () => {},
     craeteTodo: () => {},
     updateTodo: () => {},
     delteTodo: () => {},
     closeTodo: () => {},
     editTodo: () => {},
})