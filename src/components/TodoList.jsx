import { deleteTodo, updateTodo, completeTodo, isEdit } from '@/features/todo/todoSlice'
import { Box, Button, Checkbox, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'

const TodoList = ({todo}) => {
  const [ editTodoState, seteditTodoState ] = useState(todo.text || "" );
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(isEdit(todo.id));
  };

  const handleUpdate = () => {
    if (editTodoState.trim() === "") return; // do not update to empty
    dispatch(updateTodo({ id: todo.id, text: editTodoState }));
    // updateTodo reducer sets isEdit = false; do not toggle isEdit here
  };

  // Keep local input state in sync when todo changes (e.g., entering edit mode)
  React.useEffect(() => {
    seteditTodoState(todo.text || "");
  }, [todo.text, todo.isEdit]);

  return (
     <Grid templateColumns="repeat(12, 1fr)" gap="6" display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"30px"} >
      <GridItem colSpan={1}>
        <Checkbox.Root checked={todo.isComplete} onChange={handleComplete} >
      <Checkbox.HiddenInput color={"white"} borderRadius={"full"}  />
      <Checkbox.Control color={"white"} borderRadius={"full"}  />
    </Checkbox.Root>
      </GridItem>

      <GridItem colSpan={9}>
        {

          todo.isEdit?
          <Input border={"2px solid green"} color={"whiteAlpha.950"} fontSize={"17px"} fontWeight={"semibold"} borderRadius={"10px"} w={"600px"} type='text' value={editTodoState}
          onChange={(e) => seteditTodoState(e.target.value) }
          onKeyDown={(e) => { if (e.key === 'Enter') handleUpdate(); }} />
          :
          <Text  border={"2px solid green"} color={"whiteAlpha.950"} paddingLeft={"10px"} w={"600px"} paddingTop={"6px"} paddingBottom={"6px"} fontSize={"17px"} fontWeight={"semibold"} borderRadius={"10px"} >
          {todo.isComplete? <del>{todo.text}</del> : todo.text }
          </Text>
          
        }
      </GridItem>

      <GridItem colSpan={2}>
        <Flex display={"flex"} alignItems={"center"} gap={"10px"} justify={"end"} >
        {todo.isEdit? 
        <>
        <Button onClick={handleUpdate} colorPalette="green" variant="outline">
        <Text>UPDATE</Text>
      </Button>
        </>
      :
      <>
       <Button onClick={handleEdit} colorPalette="blue" variant="outline">
        <FaEdit color='blue' />
      </Button>

       <Button onClick={() => dispatch(deleteTodo(todo.id))} colorPalette="red" variant="outline">
        <MdDelete color='red' />
      </Button>
      </>
      }
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default TodoList
