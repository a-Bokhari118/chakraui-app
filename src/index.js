import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { TodoProvider } from './context/todoContext';
ReactDOM.render(
  <ChakraProvider>
    <TodoProvider>
      <CSSReset />
      <App />
    </TodoProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
