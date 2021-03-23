import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { TodoContext } from '../context/todoContext';
const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100000000),
      text,
      complete: false,
    };
    addTodo(newTodo);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='5' mb='5'>
        <Input
          variant='flushed'
          placeholder='Learning ChakraUi...'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button colorScheme='purple' px='8' type='submit'>
          Add New Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
