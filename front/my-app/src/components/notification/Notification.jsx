import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";
import appURL from "../../api/appURL";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Notification extends Component {
  
    constructor() {
    super();
    this.state = {
      show: false,
      notificationData: [],
      notificationMessage:"",
      notificationTitle:"",
      notificationDate:""
    };
  }

  componentDidMount() {
    axios.get(appURL.NotificationHistory).then(response => {
      this.setState({notificationData: response.data});
    }).catch(error => {

    });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event) => {
    this.setState({ show: true });
    let nMessage = event.target.getAttribute("data-message");
    let nTitle = event.target.getAttribute("data-title");
    let nDate = event.target.getAttribute("data-date");
    this.setState({notificationMessage:nMessage, notificationTitle:nTitle, notificationDate:nDate})
  };

  render() {

    if(!localStorage.getItem('token')){
      return <Navigate to="/login" />
 }

    const notificationList = this.state.notificationData;
    const myView = notificationList.map((notificationList, i) => {
      return <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
      <Card data-title={notificationList.title} data-date={notificationList.date} data-message={notificationList.message} onClick={this.handleShow} className="notification-card">
        <Card.Body>
          <h6>{notificationList.title}</h6>
          <p className="py-1  px-0 text-primary m-0">
            <i className="fa  fa-bell"></i> Date: {notificationList.date}<br/><br/>
          </p>
          <Button data-title={notificationList.title} data-date={notificationList.date} data-message={notificationList.message} className="btn btn-danger">Details</Button>
        </Card.Body>
      </Card>
    </Col>
    })

    return (
      <Fragment>
        <Container className="TopSection">
          <Row>
            {myView}
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:{this.state.notificationDate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.notificationTitle}</h6>
            <p>
              {this.state.notificationMessage}
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
