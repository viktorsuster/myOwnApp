import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import bg from '../assets/bg.jpg'
import { AppToDo } from './todo'

export const Home = () => (
    <Box background={`url('${bg}') center / cover no-repeat`} h="100vh">
    <Center h="100vh" color="white">
    <Box width="80vh">
    <AppToDo />
    </Box>
    </Center>
    </Box>
)