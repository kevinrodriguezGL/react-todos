import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types';

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo
});

const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: todo
});

export {
  addTodo, editTodo, removeTodo
};