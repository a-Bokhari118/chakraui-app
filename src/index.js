import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { TodoProvider } from './context/todoContext';
ReactDOM.render(
  <ChakraProvider>
    <TodoProvider>
      <ColorModeScript initialColorMode='light' />
      <App />
    </TodoProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
