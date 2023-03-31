import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// top text and bottom text needed to print on top meme
class MemeForm extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      allMemeImgs: [],
      randomImg: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // componentDidMount() method to fetch images from the API
  componentDidMount = ()=>{

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
    // Destructuring the event.target object
    const { name, value } = event.target;

    // Updating the state variable
    this.setState({
      [name]: value
    });

  };

  // Method to submit form and create meme
  handleSubmit = event =>{
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const rand = allMemeImgs[
      Math.floor(Math.random() * allMemeImgs.length)].url;
    this.setState({
      randomImg: rand
    });
  };

  render(){

    return (
      <div>
        <Container className="mt-4">
          <div onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <input
                placeholder="Top text"
                type = 'text'
                value={this.state.topText}
                name = 'topText'
                onChange={this.handleChange}
                />
              </Col>
              <Col>
                <input
                placeholder="Bottom text"
                type='text'
                value = {this.state.bottomText}
                name ='bottomText'
                onChange={this.handleChange}
                />
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-3">
              <Button variant="dark" size="lg" onClick={this.handleSubmit}>
                Get a new meme image
              </Button>
            </div>
          </div>
          <div>
            <div className="meme container mt-3">
              <img src={this.state.randomImg} alt="meme" className="meme--image"/>
              <h2 className="meme--text top">{this.state.topText}</h2>
              <h2 className="meme--text bottom">{this.state.bottomText}</h2>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default MemeForm
