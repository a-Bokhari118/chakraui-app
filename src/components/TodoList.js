import { useState } from 'react';
import {
  Heading,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';

const TodoList = () => {
  const { todos, deleteTodo, toggolTodo } = useContext(TodoContext);
  console.log(todos);

  const completeHandler = (id) => {
    toggolTodo(id);
  };
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
      {todos.length > 0 ? (
        todos.map((todo) => (
          <HStack key={todo.id}>
            <Text
              as={todo.complete ? 'del' : ''}
              onClick={() => completeHandler(todo.id)}
              color={todo.complete ? 'gray.300' : 'gray.900'}
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
        <Heading alignSelf='center' color='teal.500'>
          Eyyyy No Todos!
        </Heading>
      )}
    </VStack>
  );
};

export default TodoList;
