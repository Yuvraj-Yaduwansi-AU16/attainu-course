import React from 'react';
import { Card } from 'react-bootstrap';
function PostDetails({ post }) {
  const { title, body } = post;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <br />

        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostDetails;
