import React from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

function ItemCard() {
  const cards = [
    { heading: 'NET', title: 'DevCraft' },
    { heading: 'MOBILE', title: 'Telerik Platform' },
    { heading: 'HTML5', title: 'KendoUI' },
    { heading: 'CMS', title: 'Progress' },
    { heading: 'NATIVE MOBILE', title: 'NativeScript' },
    { heading: 'TESTING', title: 'Test Studio' },
  ];
  return (
    <div>
      <Container fluid>
        <Row>
          {cards.map((card) => (
            <Col xs={4} style={{ marginTop: '40px', padding: '40px' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Header className='text-center'>
                  {card.heading}
                </Card.Header>
                <Card.Body className='text-center'>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className='text-center'>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ItemCard;
