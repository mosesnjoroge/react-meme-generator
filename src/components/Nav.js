import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Nav(){


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          Meme Generator
        </Navbar.Brand>
        <h3>
          React Course - Project 3
        </h3>
      </Container>
    </Navbar>

  );
}
