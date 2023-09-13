import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, Navigate } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import SuggestedProduct from "../Products/SuggestedProduct";
import Reviews from "./Reviews";
import cogoToast from "cogo-toast";
import axios from "axios";
import appURL from "../../api/appURL";

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      confirmSize: null,
      confirmColor: null,
      confirmCode: null,
      color: "",
      size: "",
      quantity: "",
      pageRefresh: false,
    };
  }

  imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute("src");
    let previewImg = document.getElementById("previewImg");
    ReactDOM.findDOMNode(previewImg).setAttribute("src", imgSrc);
  };

  hasDiscount(productPrice, productDiscount) {
    if (productDiscount === "na") {
      return (
        <div className="input-group">
          <div className="Product-price-card d-inline ">R$ {productPrice}</div>
        </div>
      );
    } else {
      return (
        <div className="input-group">
          <div className="Product-price-card d-inline ">R$ {productDiscount}</div>
        </div>
      );
    }
  }

  colorOnChange = (event) => {
    let color = event.target.value;
    this.setState({ color: color });
  };

  sizeOnChange = (event) => {
    let size = event.target.value;
    this.setState({ size: size });
  };

  quantityOnChange = (event) => {
    let quantity = event.target.value;
    this.setState({ quantity: quantity });
  };

  addToCart = () => {
    let confirmSize = this.state.confirmSize;
    let confirmColor = this.state.confirmColor;
    let productColor = this.state.color;
    let productSize = this.state.size;
    let productQuantity = this.state.quantity;
    let productCode = this.state.confirmCode;
    let email = this.props.user.email;

    if (confirmColor === "YES" && productColor.length === 0) {
      cogoToast.error("Please select a color", { position: "top-right" });
    } else if (confirmSize === "YES" && productSize.length === 0) {
      cogoToast.error("Please select a size", { position: "top-right" });
    } else if (productQuantity.length === 0) {
      cogoToast.error("Please Select Quantity", { position: "top-right" });
    } else if (!localStorage.getItem("token")) {
      cogoToast.warn("Please Login to keep shopping", {
        position: "top-right",
      });
    } else {
      let formData = new FormData();
      formData.append("color", productColor);
      formData.append("size", productSize);
      formData.append("quantity", productQuantity);
      formData.append("product_code", productCode);
      formData.append("email", email);

      axios
        .post(appURL.addToCart, formData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success("Product added in your cart successfully.", {
              position: "top-right",
            });
            this.setState({ pageRefresh: true });
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

  pageRefresh = () => {
    if (this.state.pageRefresh) {
      window.location.reload();
    }
  };

  addToFav = () => {
    let productCode = this.state.confirmCode;
    let email = this.props.user.email;

    if (!localStorage.getItem("token")) {
      cogoToast.warn("Please you have to be logged to add to favorites", {
        position: "top-right",
      });
    } else {
      axios
        .get(appURL.addToFavorite(productCode, email))
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success("Product added to your favorites.", {
              position: "top-right",
            });
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
    let ProductAllData = this.props.productData;

    if (!ProductAllData.product || ProductAllData.product.length === 0) {
      return <div></div>;
    }

    const product = ProductAllData.product[0];
    const productDetails = ProductAllData.productDetails[0];

    const productTitle = product.title;
    const productPrice = product.price;
    const productDiscount = product.discount;
    const productReview = product.review;
    const productStar = product.star;
    const category = product.category;
    const productId = product.id;
    const title = product.title;
    const productCode = product.product_code;
    const productImage1 = productDetails.image_one;
    const productImage2 = productDetails.image_two;
    const productImage3 = productDetails.image_three;
    const productImage4 = productDetails.image_four;
    const productImage5 = productDetails.image_five;
    const productColor = productDetails.color;
    const productSize = productDetails.size;

    var ColorDiv = "d-none";
    if (productColor !== "na") {
      let ColorArray = productColor.split(",");
      var ColorOption = ColorArray.map((ColorList, i) => {
        return <option value={ColorList}> {ColorList} </option>;
      });
      ColorDiv = "";
    } else {
      ColorDiv = "d-none";
    }

    var SizeDiv = "d-none";
    if (productSize !== "na") {
      let SizeArray = productSize.split(",");
      var SizeOption = SizeArray.map((SizeList, i) => {
        return <option value={SizeList}> {SizeList} </option>;
      });
      SizeDiv = "";
    } else {
      SizeDiv = "d-none";
    }

    if (this.state.confirmSize === null) {
      if (productSize !== "na") {
        this.setState({ confirmSize: "YES" });
      } else {
        this.setState({ confirmSize: "NO" });
      }
    }

    if (this.state.confirmColor === null) {
      if (productColor !== "na") {
        this.setState({ confirmColor: "YES" });
      } else {
        this.setState({ confirmColor: "NO" });
      }
    }

    if (this.state.confirmCode === null) {
      this.setState({ confirmCode: productCode });
    }

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                {" "}
                <Link to="/"> Home </Link>{" "}
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {" "}
                <Link to={"/recommended/" + category}> {category} </Link>{" "}
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {" "}
                <Link to={"/productdetails/" + productId}> {title} </Link>{" "}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <img
                    id="previewImg"
                    className=" bigImage"
                    src={productImage1}
                    alt="Product Preview"
                  />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onMouseOver={this.imgOnClick}
                          onMouseOut={this.imgOnMouseOut}
                          className="smallImage product-sm-img"
                          src={productImage1}
                          alt="Product Image"
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onMouseOver={this.imgOnClick}
                          onMouseOut={this.imgOnMouseOut}
                          className="smallImage product-sm-img"
                          src={productImage2}
                          alt="Product Image"
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onMouseOver={this.imgOnClick}
                          onMouseOut={this.imgOnMouseOut}
                          className="smallImage product-sm-img"
                          src={productImage3}
                          alt="Product Image"
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onMouseOver={this.imgOnClick}
                          onMouseOut={this.imgOnMouseOut}
                          className=" smallImage product-sm-img"
                          src={productImage4}
                          alt="Product Image"
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{productTitle}</h5>
                  <h6 className="section-sub-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio incidunt quidem beatae placeat.
                  </h6>
                  {this.hasDiscount(productPrice, productDiscount)}
                  <div className={ColorDiv}>
                    <h6 className="mt-2"> Choose Color </h6>
                    <select
                      onChange={this.colorOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Color</option>
                      {ColorOption}
                    </select>
                  </div>

                  <div className={SizeDiv}>
                    <h6 className="mt-2"> Choose Size </h6>
                    <select
                      onChange={this.sizeOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Size</option>
                      {SizeOption}
                    </select>
                  </div>

                  <h6 onChange={this.quantityOnChange} className="mt-2">
                    Quantity
                  </h6>
                  <input
                    className="form-control text-center w-50"
                    type="number"
                    onChange={this.quantityOnChange}
                  />

                  <div className="input-group mt-3">
                    <button
                      className="btn site-btn m-1 "
                      onClick={this.addToCart}
                    >
                      {" "}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button onClick={this.addToFav} className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-heart"></i> Favorite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">Details</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                  </p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <Reviews id={productId} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SuggestedProduct category={category} />
        {this.pageRefresh()}
      </Fragment>
    );
  }
}

export default ProductDetails;
