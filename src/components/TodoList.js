import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridRow } from 'semantic-ui-react'

import TodoCard from './TodoCard';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const todoElements = Object.values(todos);
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