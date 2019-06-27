import React from 'react';
import { Grid, GridRow } from 'semantic-ui-react'
import { connect } from 'react-redux';

import TodoCard from './TodoCard';

const TodoList = ({ todos }) => {
  return (
    <Grid padded>
      <GridRow centered>
        { Object
          .values(todos)
          .map(todo => 
            <TodoCard key={todo.id} todo={todo}/>
          )
        }
      </GridRow>
    </Grid>
  );
};

const mapStateToProps = ({ todos }) => ({ todos: todos.todos });

export default connect(mapStateToProps)(TodoList);