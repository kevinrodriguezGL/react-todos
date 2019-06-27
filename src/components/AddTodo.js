import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const styles = {
  form: {
    marginTop: '1em',
    textAlign: 'center'
  }
};

const AddTodo = () => {
  const [ title, setTitle ] = useState('');
  const handleSubmit = () => {
    alert(title);
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

export default AddTodo;