import axios from "axios";
import React, { Component, Fragment } from "react";
import appURL from "../../api/appURL";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      show: false,
      notificationMsg: "",
      notificationTitle: "",
      notificationDate: "",
    };
  }

  componentDidMount() {
    let email = this.props.user.email;
    axios
      .get(appURL.orderListByEmail(email))
      .then((response) => {
        this.setState({ productData: response.data });
      })
      .catch((error) => {});
  }

  onClose = () => {
    this.setState({ show: false });
  };

  onShow = (event) => {
    this.setState({ show: true });
    let notificationMsg = event.target.getAttribute("data-message");
    let notificationTitle = event.target.getAttribute("data-title");
    let notificationDate = event.target.getAttribute("data-date");
    this.setState({
      notificationMsg: notificationMsg,
      notificationTitle: notificationTitle,
      notificationDate: notificationDate,
    });
  };

  render() {
    const myList = this.state.productData;
    const myView = myList.map((productList, i) => {
      return (
        <div>
          <Col md={6} lg={6} sm={6} xs={6}>
            <h5 className="product-name">{productList.product_name}</h5>
            <h6>Quantity: {productList.quantity}</h6>
            <p>Size: {productList.size}</p>
            <p>Color: {productList.color}</p>
            <h6>Status: {productList.order_status} </h6>
            <h6>Price: {productList.total_price}$</h6>
          </Col>
          <Button onClick={this.onShow} className="btn btn-danger">
            Click to leave a review
          </Button>
        </div>
      );
    });

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Orders</h2>
          </div>
          <Card>
            <Card.Body>
              <Row>{myView}</Row>
            </Card.Body>
          </Card>
        </Container>
        <Modal show={this.state.show} onHide={this.onClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i>TITLE{" "}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>BODY TITLE</h6>
            <p>BODY</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default OrderList;
