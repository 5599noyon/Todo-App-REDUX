import TodoList from "./TodoList";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";


const DisplayTodoList = () => {
  const { todos: todo } = useSelector((state) => state.todos);

  return (
    <Flex flexDirection={"column"} >
      {todo?.map((t) => <TodoList key={ t.id || 0 } todo={t} /> ) }
    </Flex>
  )
}

export default DisplayTodoList
