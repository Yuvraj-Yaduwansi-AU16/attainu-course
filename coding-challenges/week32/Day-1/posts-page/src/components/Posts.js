import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import Postcontext from '../contexts/PostContext';
import PostDetails from './PostDetails';
function Posts() {
  const postContext = useContext(Postcontext);
  const { posts, singlePost, getPosts, clickedPost, error } = postContext;
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    clickedPost(e.target.id);
  };

  return (
    <Container className='mt-5 text-center'>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Row>
        <Col className='bg-light mx-5'>
          <h1 className='text-danger'>Posts List</h1>
          <div>
            {posts &&
              posts.map((post) => (
                <Card key={post.id} onClick={onClick}>
                  <Card.Body id={post.id}>{post.title}</Card.Body>
                </Card>
              ))}
          </div>
        </Col>

        <Col className='bg-light mx-5'>
          <h1 className='text-danger'>Post Details</h1>
          <Card className='text-center'>
            {singlePost && <PostDetails post={singlePost} />}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Posts;
