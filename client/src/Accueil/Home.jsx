import React from 'react';
import { Container, Box, Image, Button, Text, VStack, IconButton, Spacer, Flex, Heading } from "@chakra-ui/react"
import { Route } from "react-router-dom";
import Homepage from "../Pages/Homepage"

import Navbar from "./Navbar"
import {
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
  return (
    <>
      <VStack>
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="crimson" >
            IRC CHAT
          </Heading>

          <Spacer></Spacer>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Navbar/>
      </VStack>
    </>
  );
};

export default Home;
