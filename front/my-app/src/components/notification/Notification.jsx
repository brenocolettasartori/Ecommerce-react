import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";

class Notification extends Component {
  
    constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>
            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum</h6>
                  <p className="py-1  px-0 text-primary m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Unread
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum</h6>
                  <p className="py-1   px-0 text-primary m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Unread
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum</h6>
                  <p className="py-1  px-0 text-success m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h5> Lorem Ipsum</h5>
                  <p className="py-1  px-0 text-success m-0">
                    <i className="fa fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum</h6>
                  <p className="py-1  px-0 text-success m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum</h6>
                  <p className="py-1 px-0 text-success m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:11/05/2021
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab sed doloribus velit officiis ullam quo repellat harum asperiores quidem 
                voluptatem tempora tempore, possimus magni suscipit, vel voluptatibus omnis quos.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Notification;
