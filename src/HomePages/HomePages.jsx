import NavBar from "@/Component/NavBar"
import CreatTodo from "@/components/CreatTodo"
import DisplayTodoList from "@/components/DisplayTodoList"
import DrawerTab from "@/components/DrawerTab"
import TotalTask from "@/components/TotalTask"
import { Box, Stack } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"


const HomePages = () => {
  return (
    <Box>
      <NavBar />
      <DrawerTab />
      <Container>
        <Box className=" allpages " display={"flex"} alignItems={"center"} justifyContent={"center"} bg={"blackAlpha.950"} marginX={"auto"} paddingTop={"20px"} paddingBottom={"20px"} borderRadius={"30px"} marginBottom={"120px"} boxShadow={"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"} >
          <Stack>
            <Box bg={"#FFFFFF"} paddingTop={"30px"} paddingBottom={"30px"} paddingRight={"50px"} paddingLeft={"50px"} borderRadius={"20px"} boxShadow={"linear-gradient(180deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);"}  >
              <TotalTask />
            </Box>
            <Box>
              <CreatTodo />
            </Box>
            <Box>
              <DisplayTodoList/>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePages
