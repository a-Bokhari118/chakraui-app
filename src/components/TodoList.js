import {
  Heading,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';

const TodoList = () => {
  const { todos, deleteTodo, toggolTodo } = useContext(TodoContext);
  console.log(todos);
  const { colorMode } = useColorMode();

  return (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.200'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos?.length > 0 ? (
        todos.map((todo) => (
          <HStack key={todo.id}>
            <Text
              as={todo.complete ? 'del' : ''}
              onClick={() => toggolTodo(todo.id)}
              color={
                colorMode === 'light'
                  ? todo.complete
                    ? 'gray.300'
                    : 'gray.900'
                  : todo.complete
                  ? 'whiteAlpha.400'
                  : 'whiteAlpha'
              }
              cursor='pointer'
            >
              {todo.text}
            </Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound='true'
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
        ))
      ) : (
        <Heading
          alignSelf='center'
          bgGradient='linear(to-r, purple.500, pink.300, blue.500)'
          backgroundClip='text'
        >
          Eyyyy No Todos!
        </Heading>
      )}
    </VStack>
  );
};

export default TodoList;
