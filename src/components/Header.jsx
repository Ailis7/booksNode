import React from 'react';
import { Navbar, Container, Nav, Form, Button, Modal } from 'react-bootstrap';
// import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../img/books_image.png';

export default function Header({
  changeForm,
  sendForm,
  switchStatus,
  valid,
  handleClose,
  show,
  logBtn,
}) {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: 'rgb(124, 25, 218)',
          color: 'white',
        }}
      >
        <Container>
          <Navbar.Brand href="/" className="text-light">
            <img
              src={logo}
              height="40"
              width="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className="ml-2">Books list</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">{logBtn}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={!switchStatus}>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onChange={(event) => changeForm(event)}
            onSubmit={(event) => sendForm(event)}
          >
            <Form.Group controlId="mail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                disabled={switchStatus}
              />
              <Form.Text className="text-muted">have fun!</Form.Text>
            </Form.Group>
            <Form.Group controlId="pass">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                disabled={switchStatus}
                required
              />
            </Form.Group>
            <div
              className={`mb-3 pl-4 text-danger font-weight-bold collapse ${valid.class}`}
            >
              {valid.message}
            </div>
            <Button
              variant="dark"
              onClick={handleClose}
              disabled={switchStatus}
            >
              Cancel
            </Button>
            <Button
              className="ml-2"
              variant="success"
              type="submit"
              disabled={switchStatus}
              // onClick={() => alert('отправлено')}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

Header.propTypes = {
  // item: PropTypes.instanceOf(PurchaseModel).isRequired,
  changeForm: PropTypes.func.isRequired,
  sendForm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  switchStatus: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  logBtn: PropTypes.node.isRequired,
  valid: PropTypes.shape({
    class: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};
