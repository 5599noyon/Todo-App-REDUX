// Sidebar.jsx
import React from "react";
import { Box, VStack, Heading, Text, Stack, HStack, Avatar } from "@chakra-ui/react";
import { MyImage } from "@/assets/ImportImages";

export default function Sidebar() {
  const width = "280px";

  return (
    <>
      <Box
        as="aside"
        position="fixed"
        left="0"
        top="0"
       
        w={width}
        bg=" #000000 "
        borderRight="1px"
        borderColor="#F0F0F0"
        boxShadow="0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"
        zIndex="sticky"
        overflowY="auto"
      >
        <Heading size="md" p={8} borderBottom="1px solid" borderColor="gray.100"  >
          <Avatar.Root className=" avatericon flex items-center justify-start gap- z-10 " >
            <Text className="avatertext text-amber-50 text-nowrap z-[2] " >Shahriar Noyon</Text>
            <Avatar.Image className=" cursor-pointer " src={MyImage} />
          </Avatar.Root>
        </Heading>
      </Box>
    </>
  );
}
