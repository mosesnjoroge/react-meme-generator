import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function MemeForm(){


  return (
    <div>
      <Container className="mt-4">
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Top text" />
            </Col>
            <Col>
              <Form.Control placeholder="Bottom text" />
            </Col>
          </Row>
          <div className="d-grid gap-2 mt-3">
            <Button variant="dark" size="lg">
              Get a new meme image
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
