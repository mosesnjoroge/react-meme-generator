import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function MemeForm(){

  state = {
    topText: "",
    bottomText: "",
    allMemeImgs: [],
    randomImg: ""
  };

  // componentDidMount() method to fetch
  // images from the API
  componentDidMount() {

    // Fetching data from the API
    fetch("https://api.imgflip.com/get_memes")
      // Converting the promise received into JSON
      .then(response => response.json())
      .then(content =>
          // Updating state variables
        this.setState({
          allMemeImgs: content.data.memes
        })
      );
  }

  // Method to change the value of input fields
  handleChange = event => {
    // Destructuring the event. target object
    const { name, value } = event.target;

    // Updating the state variable
    this.setState({
      [name]: value
    });
  };

  // Method to submit from and create meme
  handleSubmit = event => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const rand =
      allMemeImgs[Math.floor(Math.random()
      * allMemeImgs.length)].url;
    this.setState({
      randomImg: rand
    });
  };


  return (
    <div>
      <Container className="mt-4">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
              placeholder="Top text"
              name = 'toptext'
              type = 'text'
              value={this.state.topText}
              onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Control
              placeholder="Bottom text"
              name ='bottomtext'
              type='text'
              value = {this.state.bottomText}
              onChange={this.handleChange}
              />
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
