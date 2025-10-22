import useTodo from '@/hooks/useTodo'
import { Box, Button, Checkbox, CheckboxCard, Flex, For, Grid, GridItem, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const TodoList = ({todo}) => {
  const {delteTodo, completeTodo, editTodo, updateTodo } = useTodo();
  const [ editTodoState, seteditTodoState ] = useState(todo.text || "" );

  const handleComplete = () => {
    completeTodo(todo.id)
  };

  const handleEdit = () => {
    editTodo(todo.id)
  };

    const handleupdate = () => {
    updateTodo(todo.id, editTodoState )
  };

  return (
     <Grid templateColumns="repeat(12, 1fr)" gap="6" display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"30px"} >
      <GridItem colSpan={1}>
        <Checkbox.Root checked={todo.isComplete} onChange={handleComplete}>
      <Checkbox.HiddenInput color={"white"} borderRadius={"full"}  />
      <Checkbox.Control color={"white"} borderRadius={"full"}  />
    </Checkbox.Root>
      </GridItem>

      <GridItem colSpan={9}>
        {

          todo.isEdit?
          <Input border={"2px solid green"} color={"whiteAlpha.950"} fontSize={"17px"} fontWeight={"semibold"} borderRadius={"10px"} w={"600px"} type='text' value={editTodoState} 
          onChange={(e) => seteditTodoState(e.target.value) } />
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
        <Button onClick={handleupdate} colorPalette="green" variant="outline">
        <Text>UPDATE</Text>
      </Button>
        </>
      :
      <>
       <Button onClick={handleEdit} colorPalette="blue" variant="outline">
        <FaEdit color='blue' />
      </Button>

       <Button onClick={() => delteTodo(todo.id) } colorPalette="red" variant="outline">
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
