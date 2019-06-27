import React from 'react';
import { Grid, GridRow } from 'semantic-ui-react'

import { useTodos } from '../context/todos';

import TodoCard from './TodoCard';

const TodoList = () => {
  const todos = useTodos();
  const todoElements = Object.values(todos.todos);
  const renderCards = (todos) => {
    return todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)
  }
  return (
    <Grid padded>
      <GridRow centered>
        { todoElements.length > 0 ? renderCards(todoElements) : <div>There are no todos, try adding a new one!</div> }
      </GridRow>
    </Grid>
  );
};

export default TodoList;