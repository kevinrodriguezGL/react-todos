import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types';

const initialState = {
  todos: {}
}

export default (state = initialState, { type, payload }) => {
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
