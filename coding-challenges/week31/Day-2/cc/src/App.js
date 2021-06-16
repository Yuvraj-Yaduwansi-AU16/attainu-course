import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
function App() {
  const [alert, setalert] = useState(false);
  const inputfields = [
    { heading: 'Name', type: 'text' },
    { heading: 'Email Address', type: 'email' },
    { heading: 'Address', type: 'text' },
    { heading: 'Password', type: 'password' },
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    setalert(true);
    setTimeout(() => {
      setalert(false);
    }, 2000);
  };
  return (
    <Container className='m-5'>
      {alert && (
        <Alert variant='success'>
          Your Form has been submitted successfully
        </Alert>
      )}
      <Form>
        {inputfields.map((value) => (
          <Form.Group className='mb-3'>
            <Form.Label>{value.heading}</Form.Label>
            <Form.Control type={value.type} placeholder={value.heading} />
          </Form.Group>
        ))}

        <Form.Group className='mb-3'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type='tel'
            id='phone'
            name='phone'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            maxLength='10'
            placeholder='Phone Number'
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
