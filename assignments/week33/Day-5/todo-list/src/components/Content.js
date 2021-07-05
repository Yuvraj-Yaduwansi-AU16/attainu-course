import React, { useRef } from 'react';
import { Button, Container, Form, Card } from 'react-bootstrap';
import uuid from 'react-uuid';
import ToDoItem from './ToDoItem';
import { addTodo, editTodo, setTodo, deleteTodo } from '../actions';
import { connect } from 'react-redux';
function Content({ todo, current, addTodo, editTodo, setTodo, deleteTodo }) {
  const textRef = useRef();
  const editText = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (textRef === '') return;
    else {
      addTodo(textRef.current.value);
    }
    textRef.current.value = '';
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let todos = [
      todo.map((item, i) => {
        if (i === parseInt(current)) {
          return editText.current.value;
        } else {
          return item;
        }
      }),
    ];
    setTodo(...todos);
    editTodo('');
  };
  const handleDelete = (e) => {
    e.preventDefault();
    let todos = [...todo];
    let index = todos.indexOf(e.target.value);
    if (index !== -1) {
      deleteTodo(index);
    }
  };

  const setCurrent = (e) => {
    editTodo(e.target.parentElement.parentElement.parentElement.id);
  };
  return (
    <Container className=' m-5 d-flex flex-column justify-content-center align-items-center'>
      <h1>To Do List</h1>
      <Form
        onSubmit={handleSubmit}
        className='d-flex flex-row justify-content-center align-items-start'
        style={{ margin: '60px' }}
      >
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Enter an item'
            ref={textRef}
            required
            style={{ width: '50vw', marginRight: '50px' }}
          />
        </Form.Group>
        <Button className='w-50' type='submit'>
          Add To-Do
        </Button>
      </Form>
      <Container>
        {todo &&
          todo.map((inputText, i) => (
            <Container
              key={i}
              className='d-flex flex-row justify-content-between'
            >
              {current !== String(i) ? (
                <div
                  className='mt-5'
                  id={i}
                  onClick={setCurrent}
                  style={{ width: '800px' }}
                >
                  <ToDoItem value={inputText} />
                </div>
              ) : (
                <Container>
                  <Card>
                    <Card.Body>
                      {' '}
                      <Form
                        onSubmit={handleEdit}
                        className='d-flex flex-row justify-content-center align-items-start'
                      >
                        <Form.Group>
                          <Form.Control
                            type='text'
                            placeholder='Enter an item'
                            ref={editText}
                            required
                            style={{ width: '800px', height: '8vh' }}
                            id={i}
                          />
                        </Form.Group>
                      </Form>
                    </Card.Body>
                  </Card>
                </Container>
              )}

              <Button
                key={uuid()}
                className='btn-danger w-25 mt-5'
                value={inputText}
                onClick={handleDelete}
              >
                Delete ToDo
              </Button>
            </Container>
          ))}
      </Container>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  todo: state.todo,
  current: state.current,
});
export default connect(mapStateToProps, {
  addTodo,
  editTodo,
  setTodo,
  deleteTodo,
})(Content);
