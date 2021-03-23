import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'TOG_TODO':
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.complete = !todo.complete;
        }
      });
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTodo(todo) {
    dispatch({
      type: 'ADD_TODO',
      payload: todo,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  }

  function toggolTodo(id) {
    dispatch({
      type: 'TOG_TODO',
      payload: id,
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        toggolTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
