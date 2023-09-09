import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactDOM from 'react-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import SuggestedProduct from '../Products/SuggestedProduct'

class ProductDetails extends Component {

  imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute('src');
    let previewImg = document.getElementById('previewImg');
         ReactDOM.findDOMNode(previewImg).setAttribute('src',imgSrc)
}

hasDiscount(productPrice, productDiscount){
  if(productDiscount == "na"){
       return (
        <div className="input-group">
        <div className="Product-price-card d-inline ">
          {productPrice}
        </div>
      </div>
      )
  } else{
       return (
        <div className="input-group">
        <div className="Product-price-card d-inline ">
          {productDiscount}
        </div>
      </div>
      )
  }
}

  render() {
    let ProductAllData = this.props.productData;
    console.log('ProductAllData:', ProductAllData);
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
    const productImage1 = productDetails.image_one;
    const productImage2 = productDetails.image_two;
    const productImage3 = productDetails.image_three;
    const productImage4 = productDetails.image_four;
    const productImage5 = productDetails.image_five;
    const productColor = productDetails.color;
    const productSize = productDetails.size;
    //console.log('Image URLs:', productImage1, productImage2, productImage3, productImage4);

    var ColorDiv = "d-none"
    if(productColor != "na"){
         let ColorArray = productColor.split(',');
         var ColorOption = ColorArray.map((ColorList, i) => {
              return <div className="input-group">
                <div className="form-check mx-1">
                  <input type="radio" className="form-check-input" value="option1" />
                  <label className="form-check-label">{ColorList}</label>
                </div>
              </div>
         })
         ColorDiv=""
    }else{
         ColorDiv="d-none"
    }

    var SizeDiv = "d-none"
    if(productSize != "na"){
         let SizeArray = productSize.split(',');
         var SizeOption = SizeArray.map((SizeList, i) => {
              return <div className="input-group">
                <div className="form-check mx-1">
                  <input className="form-check-input" type="radio" value="option1" />
                  <label className="form-check-label">{SizeList}</label>
                </div>
              </div>
         })
         SizeDiv=""
    }else{
         SizeDiv="d-none"
    }
    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
        <div className="breadbody">
          <Breadcrumb>
            <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
            <Breadcrumb.Item> <Link to={"/recommended/" + category}> {category} </Link> </Breadcrumb.Item> 
            <Breadcrumb.Item> <Link to={"/productdetails/" + productId}> {title} </Link> </Breadcrumb.Item>   
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
                  <img id="previewImg" className=" bigImage" src={productImage1} />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onMouseOver={this.imgOnClick} onMouseOut={this.imgOnMouseOut} className="smallImage product-sm-img" src={productImage1} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onMouseOver={this.imgOnClick} onMouseOut={this.imgOnMouseOut} className="smallImage product-sm-img" src={productImage2} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onMouseOver={this.imgOnClick} onMouseOut={this.imgOnMouseOut} className="smallImage product-sm-img" src={productImage3} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onMouseOver={this.imgOnClick} onMouseOut={this.imgOnMouseOut} className=" smallImage product-sm-img" src={productImage4} />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">
                  {productTitle}
                  </h5>
                  <h6 className="section-sub-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio incidunt quidem beatae placeat.
                  </h6>
                  {this.hasDiscount(productPrice,productDiscount)}
                  <h6 className="mt-2">Choose Color</h6>
                  {ColorOption}
                  <h6 className="mt-2">Choose Size</h6>
                  {SizeOption}
                  <h6 className="mt-2">Quantity</h6>
                  <input
                    className="form-control text-center w-50"
                    type="number"
                  />

                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {" "}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
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
                  <h6 className="mt-2">Reviews</h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Lorem Ipsum</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    {productReview}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SuggestedProduct category = {category}/>
      </Fragment>
    );
  }
}

export default ProductDetails;
