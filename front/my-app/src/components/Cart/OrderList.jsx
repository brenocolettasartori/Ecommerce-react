import axios from "axios";
import React, { Component, Fragment } from "react";
import appURL from "../../api/appURL";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import cogoToast from "cogo-toast";
import { Navigate } from "react-router-dom";

class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      show: false,
      notificationMsg: "",
      notificationTitle: "",
      notificationDate: "",
      name: "",
      rate: "",
      comment: "",
      product_name: "",
      product_id: "",
      modal: false,
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
    //this.setState({ show: false });
    this.setState({modal: false});
  };

  // onShow = (event) => {
  //   this.setState({ show: true });
  //   let notificationMsg = event.target.getAttribute("data-message");
  //   let notificationTitle = event.target.getAttribute("data-title");
  //   let notificationDate = event.target.getAttribute("data-date");
  //   this.setState({
  //     notificationMsg: notificationMsg,
  //     notificationTitle: notificationTitle,
  //     notificationDate: notificationDate,
  //   });
  // };

  onShow = (product_id, product_name) => {
    this.setState({modal: true, product_id: product_id, product_name: product_name})
  };

  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name });
  };

  rateOnChange = (event) => {
    let rate = event.target.value;
    this.setState({ rate: rate });
  };

  commentOnChange = (event) => {
    let comment = event.target.value;
    this.setState({ comment: comment });
  };

  postReview = () => {
    let product_id = this.state.product_id;
    let product_name = this.state.product_name;
    let rate = this.state.rate;
    let comment = this.state.comment;
    let name = this.state.name;

    if (name.length === 0) {
      cogoToast.error("Please insert a name", { position: "top-right" });
    } else if (comment.length === 0) {
      cogoToast.error("Please leave a comment", { position: "top-right" });
    } else if (rate.length === 0) {
      cogoToast.error("Please leave a rate", { position: "top-right" });
    } else if (comment.length > 50) {
      cogoToast.error(
        "Sorry comments cant exceed 150 characters. Please try again",
        { position: "top-right" }
      );
    } else {
      let myFormData = new FormData();
      myFormData.append("product_id", product_id);
      myFormData.append("product_name", product_name);
      myFormData.append("reviewer_name", name);
      myFormData.append("reviewer_picture", "");
      myFormData.append("reviewer_rate", rate);
      myFormData.append("reviewer_comment", comment);

      axios
        .post(appURL.postReview, myFormData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success("Thank you for your support", {
              position: "top-right",
            });
            this.ReviewModalClose();
          } else {
            cogoToast.error("Something went wrong. Please try again", {
              position: "top-right",
            });
          }
        })
        .catch((error) => {
          cogoToast.error("Something went wrong. Please try again", {
            position: "top-right",
          });
        });
    }
  };

  render() {

    if(!localStorage.getItem('token')){
      return <Navigate to="/login" />
 }

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
          <Button onClick={this.onShow.bind(this, productList.product_code, productList.product_name)} className="btn btn-danger">
            Click to leave a review
          </Button>
          <hr></hr>
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
        <Modal show={this.state.modal} onHide={this.onClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i>TITLE{" "}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Please insert your name</label>
              <input
                onChange={this.nameOnChange}
                className="form-control"
                type="text"
                placeholder={this.props.user.name}
              />
            </div>

            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Rate</label>
              <select onChange={this.rateOnChange} className="form-control">
                <option value="">Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Leave a comment to help us</label>
              <textarea
                onChange={this.commentOnChange}
                rows={2}
                className="form-control"
                type="text"
                placeholder="Your Comment"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.postReview}>
              Post
            </Button>
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
