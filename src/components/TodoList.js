import React from 'react';
import { Grid, GridRow } from 'semantic-ui-react'
import { connect } from 'react-redux';

import TodoCard from './TodoCard';

const TodoList = ({ todos }) => {
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

const mapStateToProps = ({ todos }) => ({ todos: todos.todos });

export default connect(mapStateToProps)(TodoList);