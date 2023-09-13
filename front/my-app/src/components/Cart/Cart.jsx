import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import appURL from "../../api/appURL";
import cogoToast from "cogo-toast";
import { Navigate } from "react-router-dom";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      userEmail: "",
      pageRefresh: false,
      country: "",
      payment: "",
      address: "",
      pageRedirect: false,
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    const email = localStorage.getItem("userEmail");

    if (email) {
      this.setState({ userEmail: email });
      this.fetchCartProducts(email);
    } else if (this.props.user && this.props.user.email) {
      this.fetchCartProducts(this.props.user.email);
    }
  }

  fetchCartProducts(email) {
    axios
      .get(appURL.listCart(email))
      .then((response) => {
        const uniqueProducts = response.data.filter(
          (product, index, self) =>
            index ===
            self.findIndex((p) => p.product_code === product.product_code)
        );
        this.setState({ productData: uniqueProducts });
        localStorage.setItem("userEmail", email);
      })
      .catch((error) => {});
  }

  componentWillUnmount() {
    localStorage.removeItem("userEmail");
  }

  removeProduct = (event) => {
    let product_code = event.target.getAttribute("data-code");
    let email = this.props.user.email;

    axios
      .get(appURL.removeCart(product_code, email))
      .then((response) => {
        cogoToast.success("Product removed successfully.", {
          position: "top-right",
        });
        this.setState({ pageRefresh: true });
      })
      .catch((error) => {
        cogoToast.error("Something went wrong. Please try again", {
          position: "top-right",
        });
      });
  };

  pageRefresh = () => {
    if (this.state.pageRefresh) {
      window.location.reload();
    }
  };

  addItem = (id, quantity, price) => {
    axios
      .get(appURL.addItem(id, quantity, price))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success("Quantity increased successfully", {
            position: "top-right",
          });
          this.setState({ pageRefresh: true });
        } else {
          cogoToast.error("Something went wrong. Please try again.", {
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        cogoToast.error("Something went wrong. Please try again.", {
          position: "top-right",
        });
      });
  };

  removeItem = (id, quantity, price) => {
    axios
      .get(appURL.removeItem(id, quantity, price))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success("Quantity decreased successfully", {
            position: "top-right",
          });
          this.setState({ pageRefresh: true });
        } else {
          cogoToast.error("Something went wrong. Please try again.", {
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        cogoToast.error("Something went wrong. Please try again.", {
          position: "top-right",
        });
      });
  };

  countryOnChange = (event) => {
    let country = event.target.value;
    this.setState({ country: country });
  };

  paymentMethodOnChange = (event) => {
    let payment = event.target.value;
    this.setState({ payment: payment });
  };

  addressOnChange = (event) => {
    let address = event.target.value;
    this.setState({ address: address });
  };

  confirmOrder = () => {
    let country = this.state.country;
    let payment = this.state.payment;
    let address = this.state.address;
    let email = this.props.user.email;

    if (country.length === 0) {
      cogoToast.error("Please inform your country.", { position: "top-right" });
    } else if (payment.length === 0) {
      cogoToast.error("Please select payment method.", { position: "top-right" });
    } else if (address.length === 0) {
      cogoToast.error("Please inform your address.", { position: "top-right" });
    } else {
      let invoice = new Date().getTime();
      let myFormData = new FormData();
      myFormData.append("country", country);
      myFormData.append("payment_method", payment);
      myFormData.append("delivery_address", address);
      myFormData.append("email", email);
      myFormData.append("invoice_no", invoice);
      myFormData.append("shipment", "00");

      axios
        .post(appURL.Order, myFormData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success("Thank you, your order has been placed.", {
              position: "top-right",
            });
            this.setState({PageRedirectStaus:true})
          } else {
            cogoToast.error(
              "Something went wrong. Please try again.",
              { position: "top-right" }
            );
          }
        })
        .catch((error) => {
          cogoToast.error(
            "Something went wrong. Please try again.",
            { position: "top-right" }
          );
        });
    }
  };

  pageRedirect = () => {
    if(this.state.pageRedirect === true){
         return (
              <Navigate to="/orderlist" />
         )
    }
}

  render() {
    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" />;
    }

    const myList = this.state.productData;
    let totalPriceSum = 0;
    const myView = myList.map((ProductList, i) => {
      totalPriceSum = totalPriceSum + parseInt(ProductList.total_price);
      return (
        <div>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} lg={3} sm={6} xs={6}>
                  <img
                    className="cart-product-img"
                    src={ProductList.image}
                    alt={ProductList.product_name}
                  />
                </Col>

                <Col md={6} lg={6} sm={6} xs={6}>
                  <h5 className="product-name">{ProductList.product_name}</h5>
                  <h6> Quantity: {ProductList.quantity} </h6>
                  <p>Size: {ProductList.size}</p>
                  <p>Color: {ProductList.color}</p>
                  <h6>Price: ${ProductList.total_price}</h6>
                </Col>

                <Col md={3} lg={3} sm={12} xs={12}>
                  <Button
                    className="btn mt-2 mx-1 btn-lg site-btn"
                    onClick={this.removeProduct}
                    data-code={ProductList.product_code}
                  >
                    <i className="fa fa-trash-alt"></i>
                  </Button>
                  <Button
                    onClick={() =>
                      this.addItem(
                        ProductList.id,
                        ProductList.quantity,
                        ProductList.unit_price
                      )
                    }
                    className="btn mt-2 mx-1 btn-lg site-btn"
                  >
                    <i className="fa fa-plus"></i>{" "}
                  </Button>
                  <Button
                    onClick={() =>
                      this.removeItem(
                        ProductList.id,
                        ProductList.quantity,
                        ProductList.unit_price
                      )
                    }
                    className="btn mt-2 mx-1 btn-lg site-btn"
                  >
                    <i className="fa fa-minus"></i>{" "}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
          </div>
          <Row>
            <Col>
              {myView}
            </Col>
            <Col className="p-1" lg={5} md={5} sm={12} xs={12}>
              <div className="card p-2">
                <div className="card-body">
                  <div className="container-fluid ">
                    <div className="row">
                      <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                        <h5 className="Product-Name text-danger">
                          Total Due: R$ {totalPriceSum}
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Select your country</label>
                        <select onChange={this.countryOnChange} className="form-control">
                          <option value="">Choose</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="China">China</option>
                          <option value="Germany">Germany</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Spain">Spain</option>
                          <option value="United States">United States</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Payment method</label>
                        <select onChange={this.paymentMethodOnChange} className="form-control">
                          <option value="">Choose</option>
                          <option value="Money">Money</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Pix">Pix</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Delivery Address</label>
                        <textarea
                          rows={2}
                          className="form-control"
                          type="text"
                          placeholder=""
                          onChange={this.addressOnChange}
                        />
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <button onClick={this.confirmOrder} className="btn  site-btn">
                          Confirm Order{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {this.pageRefresh()}
        {this.pageRedirect()}
      </Fragment>
    );
  }
}

export default Cart;
