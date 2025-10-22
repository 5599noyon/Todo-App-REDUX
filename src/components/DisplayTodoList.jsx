import useTodo from "@/hooks/useTodo"
import TodoList from "./TodoList";
import { Flex } from "@chakra-ui/react";


const DisplayTodoList = () => {
  const {todo} = useTodo();

  return (
    <Flex flexDirection={"column"} >
      {todo?.map((t) => <TodoList key={ t.id || 0 } todo={t} /> ) }
    </Flex>
  )
}

export default DisplayTodoList
