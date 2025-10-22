import { useEffect, useState } from "react";
import { TodoContext } from "./todoContext";

const TodoProvider = ({ children }) => {

     const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todos")) || []);

     useEffect(() => {
          localStorage.setItem("todos", JSON.stringify(todo))
     }, [todo])

     const craeteTodo = (newTodo) => {
          setTodo((prevState) => [...prevState, newTodo]);
          localStorage.setItem("todos", JSON.stringify(todo))
     };

     const delteTodo = (id) => {
          const updateTodo = todo.filter((t) => t.id !== id);
          setTodo(updateTodo)
     };

     const completeTodo = (id) => {
          const updateTodo = todo.map((t) => {
               if (t.id === id) {
                    t.isComplete = !t.isComplete
               }
               return t
          })
          setTodo(updateTodo)
     };

     const editTodo = (id) => {
          const updateTodo = todo.map((t) => {
               if (t.id === id) t.isEdit = !t.isEdit 
               return t
               });
          setTodo(updateTodo)
     };

     const updateTodo = (id, text) => {
          const updateTodo = todo.map((t) => {
               if (t.id === id) {
                    t.text = text; 
                    t.isEdit = false
               }
               return t;
          });
          setTodo(updateTodo)
     };

     // const closeTodo = () => {};

     const value = {
          todo, craeteTodo, delteTodo, completeTodo , editTodo, updateTodo, 
     }

     return <TodoContext value={value} >
          {children}
     </TodoContext>
}

export default TodoProvider;