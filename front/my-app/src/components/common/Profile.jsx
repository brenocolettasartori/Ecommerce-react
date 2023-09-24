import React, { Component } from "react";
import { Fragment } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

class Profile extends Component {
  render() {
    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" />;
    }

    console.log(this.props.user);
    return (
      <Fragment>
        <h1> User Profile Page </h1>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" className="userProfile" />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {" "}
                    <Link className="text-link" to="/orderlist">
                      {" "}
                      <p className="product-name-on-card"> Order List </p>
                    </Link>{" "}
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    <Link className="text-link" to="/orderlist">
                      {" "}
                      <p className="product-name-on-card"> Order List </p>
                    </Link>{" "}
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    <Link className="text-link" to="/orderlist">
                      {" "}
                      <p className="product-name-on-card"> Order List </p>
                    </Link>{" "}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <ul className="list-group">
                <li className="list-group-item">Name : {name} </li>
                <li className="list-group-item">Email : {email} </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
