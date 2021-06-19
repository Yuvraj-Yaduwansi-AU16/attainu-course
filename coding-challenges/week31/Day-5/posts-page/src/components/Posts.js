import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import PostDetails from './PostDetails';
function Posts() {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState();
  useEffect(() => {
    async function getPosts() {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = res.data.slice(0, 10);
        setPosts(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getPosts();
    // eslint-disable-next-line
  }, []);

  const clickedPost = async (e) => {
    const post = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${e.target.id}`
    );
    setSinglePost(post.data);
  };
  return (
    <Container className='mt-5 text-center'>
      <Row>
        <Col className='bg-light mx-5'>
          <h1 className='text-danger'>Posts List</h1>
          <div>
            {posts &&
              posts.map((post) => (
                <Card key={post.id} onClick={clickedPost}>
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
