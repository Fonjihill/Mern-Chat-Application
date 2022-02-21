import React from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import Saly from "./Saly-12.png";
import HomePages from "../Pages/Homepage"
import {Route ,BrowserRouter as Router} from "react-router-dom"
const Navbar = () => {
    const history = useHistory()
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const handleClick = () => history.push("/auth")
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Welcome, to
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, red.500, purple.600)"
            bgClip="text"
          >
            IRC CHAT APPLICATION
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            In this application you will be able to chat with your friends,
            familly.
            <br />
            Join us, Join the new Community of IRC Application
          </Text>
         
            <Button
              mt={8}
              backgroundColor="crimson"
              color="white"
             onClick={handleClick}
            >
              <Route path="/auth" component={HomePages}/>
              Join Us
            </Button>
          
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxSize="300px"
          src={Saly}
        />
      </Flex>
    </Stack>
  );
};

export default Navbar;
