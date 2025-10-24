import { Box, Circle, Grid, GridItem, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux";

const TotalTask = () => {
  const { todos: todo } = useSelector((state) => state.todos);
  const completeTodo = todo?.filter((t) => t.isComplete );

  const progressBar = {
    total: todo?.length || 0,
    completed: completeTodo?.length || 0,
  };
  const percent = progressBar.total === 0 ? 0 : Math.round((progressBar.completed / progressBar.total) * 100);
  const percentDisplay = percent.toString().padStart(2, '0');

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"80px"} >

       {/* Progress Bar */}

       <Box W={"1000px"} width={"700px"} paddingTop={"50px"} paddingBottom={"50px"} paddingLeft={"30px"} paddingRight={"30px"} textAlign={"center"} fontSize={"25px"}>
        {/* Modern Stats Card */}
        <Box className='bg-white/80 backdrop-blur-xl rounded-3xl p-8 mb-6 border border-white/40 shadow-2xl hover:shadow-3xl transform hover:scale-[1.01] transition-all duration-500'>
          
          {/* Header */}
          <Box className="flex items-center justify-between mb-6">
            <Box marginTop={"20px"} marginLeft={"20px"} >
              <Text textAlign={"center"} marginBottom={"6"} fontSize={"3xl"} fontWeight={"bold"} className=' tasktex transition-[50px] font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                Progress Overview
              </Text>
            </Box>
            <Box marginRight={"40px"} className="flex items-center gap-2">
              <Box fontSize={"3xl"} fontWeight={"bold"} className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                {percentDisplay}%
              </Box>
            </Box>
          </Box>

          {/* Progress Bar with Glow Effect */}
          <Box className="relative w-full bg-gray-200 rounded-full h-4 mb-6 overflow-hidden shadow-inner">
            <Box 
              className='absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out shadow-lg'
              style={{ width: `${percent}%` }}
            >
              <Box className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></Box>
            </Box>
          </Box>

          {/* Stats Grid */}
          <Box marginTop={"30px"} marginBottom={"30px"} className=" grid items-center justify-center grid-cols-2 gap-4 ">
            <Box className=" flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
              <Box className="flex items-center gap-2 mb-2">
                <Box className="text-green-600" size={20} />
                <Text className=" tasktex text-sm font-medium text-gray-600">Completed</Text>
              </Box>
              <Box className="text-3xl tsktext font-bold text-green-600">
                { progressBar.completed }
              </Box>
            </Box>

            <Box className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
              <Box className="flex items-center justify-center gap-2 mb-2">
                <Box className="text-fuchsia-800" size={20} />
                <Text className=" tasktex text-sm font-medium text-gray-600">Remaining</Text>
              </Box>
              <Box className="text-3xl font-bold tastext text-indigo-600">
                { progressBar.total - progressBar.completed }
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>

       {/* Progress Bar */}

      <Box textAlign={"center"} >
       <Grid templateColumns="repeat(3, 1fr)" gap="6" alignItems={"center"}  >
      <GridItem colSpan={2}>
         <Text textAlign={"center"} marginLeft={"280px"} textStyle="4xl" className=" tasktext " >ADD YOUR TASK</Text>
         <Text textStyle="sm" marginTop={"20px"} fontSize={"20px"} fontWeight={"600"} marginLeft={"280px"} >Keep It Up</Text>
      </GridItem>
    </Grid>
    </Box>

    </Box>
  )
}

export default TotalTask;
