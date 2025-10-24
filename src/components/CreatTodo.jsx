import { addTodo } from "@/features/todo/todoSlice";
import useTodo from "@/hooks/useTodo"
import { Box, Button, Group, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const CreatTodo = () => {
  const { todos: todo } = useSelector((state) => state.todos); 
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState(
    {
    text: "" ,
    isEdit: false,
    isComplete: false,
  });

  const handleAddTodo = () => {
    if (newTodo.text.trim() !== "" && newTodo.text.length > 2) {
      dispatch(addTodo(newTodo));
      setNewTodo({...newTodo, text: ""});
      setMessage("");
    }
    else if (newTodo.text.trim() === "") {
      setMessage("Todo cannot be empty, please enter your todo.");
    }
    else if (newTodo.text.length <= 1) {
      setMessage("Todo must be at least 2 characters long.");
    }
    else {
      setMessage("Todo cannot be empty, please enter your todo.");
    }
  }; 

  return (
    
    <Box display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"} >
      <Box marginTop={"10px"} >
      <Group attached w={"500px"} maxW={"500px"} boxShadow={"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"} >
     
        <Input paddingTop={"23px"} paddingBottom={"23px"} borderRadius={"10px"} outline={"none"} border={"1px solid #FFFFFF"} flex="1" color={"whiteAlpha.950"} fontWeight={"semibold"} fontSize={"15px"} placeholder="Enter Your Todo Name" />
      <Button paddingTop={"23px"} paddingBottom={"23px"} borderRadius={"10px"} bg="#FFFFFF" color={"#000000"} fontWeight={"600"} border={"1px solid #FFFFFF"} variant="outline">
        Submit
      </Button>
    </Group>
      </Box>
    {/* 2 */}
    <Box>
      <Group attached w={"760px"} maxW={"1000px"} boxShadow={"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"} >
     
        <Input onChange={(e) => setNewTodo({...newTodo, id: todo?.length+1, text: e.target.value })} 
        paddingTop={"23px"} paddingBottom={"23px"} borderRadius={"10px"} outline={"none"} border={"1px solid #FFFFFF"} flex="1" color={"whiteAlpha.950"} fontWeight={"semibold"} fontSize={"15px"} placeholder="Enter your todo" value={newTodo.text} />

      <Button onClick={handleAddTodo} paddingTop={"23px"} paddingBottom={"23px"} borderRadius={"10px"} bg="#FFFFFF" color={"#000000"} border={"1px solid #FFFFFF"} variant="outline" >
        ADD TODO
      </Button>
      
    </Group> 
    </Box>

      <Group>
        {message && <Box textAlign={"center"} paddingRight={"200px"} paddingLeft={"200px"} bg={"blackAlpha.700"} paddingTop={"10px"} paddingBottom={"10px"} color={"red.500"}  fontWeight={"semibold"} fontSize={"18px"}  borderRadius={"10px"} >{message}</Box>}
      </Group>

    </Box>
    
  )
}

export default CreatTodo
