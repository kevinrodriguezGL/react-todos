import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';
import { editTodo, removeTodo } from '../store/todos/actions';

const styles = {
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em',
    marginBottom: 'initial'
  },
  complete: {
    textDecoration: 'line-through'
  },
  notComplete: {
    textDecoration: 'initial'
  }
}

const TodoCard = ({ todo, editTodo, removeTodo }) => {
  const handleUndo = () => {
    editTodo({
      ...todo,
      done: false
    });
  }
  const handleRemove = () => {
    removeTodo(todo);
  }
  const handleComplete = () => {
    editTodo({
      ...todo,
      done: true
    });
  }
  const renderButtons = (isDone) => {
    return isDone ? (
      <div className='ui two buttons'>
        <Button onClick={handleUndo} basic color='grey'>
          Undo
        </Button>
        <Button onClick={handleRemove} basic color='red'>
          Remove
        </Button>
      </div>
    ) : (
      <div className='ui two buttons'>
        <Button onClick={handleComplete} basic color='teal'>
          Complete
        </Button>
      </div>
    );
  }
  const { title, done } = todo;
  console.log('RENDERING: TodoCard', title)
  return (
    <Card style={styles.card} color="teal">
      <Card.Content>
        <Card.Description style={done ? styles.complete : styles.notComplete}>
          { title }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        { renderButtons(done) }
      </Card.Content>
    </Card>
  );
};

export default connect(null, { editTodo, removeTodo })(TodoCard);