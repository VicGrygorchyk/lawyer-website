import React from "react";
import "./Header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/sofiak_logo.jpg";


export class Header extends React.Component {
  render() {
    return (
      <Container className="header container-fluid">
        <Row>
          <Col className="col-2"></Col>
          <Col className="col-2"></Col>
          <Col className="col-8">
            <div className="office-info">
              Наша адреса: {this.props.address}, телефон: {this.props.phone}
            </div>
          </Col>
        </Row>
        <Row>
          <Navbar variant="underline" expand="lg">
            <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              {this.props.title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about-us" className="nav-link">
                  Про нас
                </Nav.Link>
                <Nav.Link href="#services" className="nav-link">
                  Послуги
                </Nav.Link>
                <Nav.Link href="#contacts" className="nav-link">
                  Контакти
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    );
  }
}
