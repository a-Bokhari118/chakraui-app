import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
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
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
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
    localStorage.setItem('todos', JSON.stringify([...state.todos, todo]));
  }

  function deleteTodo(id) {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
    const afterTodo = state.todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(afterTodo));
  }

  function toggolTodo(id) {
    dispatch({
      type: 'TOG_TODO',
      payload: id,
    });
    const afet = state.todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    localStorage.setItem('todos', JSON.stringify(afet));
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
