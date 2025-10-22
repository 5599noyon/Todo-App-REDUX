import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";


const useTodo = () => useContext(TodoContext)

export default useTodo
