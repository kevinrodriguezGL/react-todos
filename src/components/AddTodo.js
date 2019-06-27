import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';

import { addTodo } from '../store/todos/actions';

const styles = {
  form: {
    marginTop: '1em',
    textAlign: 'center'
  }
};

const AddTodo = ({ addTodo }) => {
  const [ title, setTitle ] = useState('');
  const handleSubmit = () => {
    addTodo({
      id: uuidv4(),
      title,
      done: false
    });
  };
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Form style={styles.form} onSubmit={handleSubmit}>
      <Input
        required
        value={title} 
        onChange={handleInputChange} 
        placeholder='Title'
        action={<Button color="teal" type="submit">Add todo</Button>}
      />
    </Form>
  );
};

export default connect(null, { addTodo })(AddTodo);