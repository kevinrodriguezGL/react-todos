import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Grid, GridRow } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';

import { addTodo } from '../store/todos/actions';

const styles = {
  form: {
    marginTop: '1em',
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
    setTitle('');
  };
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Grid padded centered>
      <GridRow>
        <Form style={styles.form} onSubmit={handleSubmit}>
          <Input
            required
            value={title} 
            onChange={handleInputChange} 
            placeholder='Title'
          />
          <Button style={{marginLeft: '1em'}} color="teal" type="submit">Add</Button>
        </Form>
      </GridRow>
    </Grid>
  );
};

export default connect(null, { addTodo })(AddTodo);