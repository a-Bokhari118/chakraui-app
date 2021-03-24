import './App.css';

import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        mb='8'
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, purple.500, pink.300, blue.500)'
        backgroundClip='text'
      >
        TODO APPLICATION
      </Heading>
      <AddTodo />
      <TodoList />
    </VStack>
  );
}

export default App;
