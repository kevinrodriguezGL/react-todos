import React, { createContext, useReducer, useContext }  from 'react'
import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types';

const initialState = {
  todos: {}
}

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO :
    case EDIT_TODO :
      return { ...state, todos: { ...state.todos, [payload.id]: payload } };
    case REMOVE_TODO :
      const { [payload.id]: excluded, ...newTodos } = state.todos;
      return { ...state, todos: newTodos };
    default:
      return state
  }
}

const TodosContext = createContext();
const TodosDispatchContext = createContext();

export const TodosProvider = ({children}) => {
  const [ state, dispatch ] = useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
}

export const useTodosDispatch = () => {
  return useContext(TodosDispatchContext);
}