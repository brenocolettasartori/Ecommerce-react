import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import appURL from "../../api/appURL";

class SuggestedProduct extends Component {

  constructor() {
    super();
    this.state = {
      productData: [],
    }
  }

  componentDidMount() {
    let category = this.props.category;

    window.scroll(0, 0);
    axios.get(appURL.relatedProduct(category))
    .then(response => {
      this.setState({productData: response.data});
    })
    .catch(error => {

    }
    );
  }

  render() {

    const myList = this.state.productData;

    if(myList.length > 0) {
      const myView = myList.map((productList, i) => {
        if(productList.discount == "na"){
          return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link className="text-link" to={"/productdetails/" + productList.id}>
            <Card className="image-box card">
              <img
                className="center"
                src={productList.image}
                alt=""
              />
              <div class="card-body">
                <p className="product-name-on-card">{productList.title}</p>
                <p className="product-price-on-card">Price: ${productList.price}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        } else {
          return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link className="text-link" to={"/productdetails/" + productList.id}>
            <Card className="image-box card">
              <img
                className="center"
                src={productList.image}
                alt=""
              />
              <div class="card-body">
                <p className="product-name-on-card">{productList.title}</p>
                <p className="product-price-on-card"><strike className="text-secondary">Price: ${productList.price}</strike></p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        }
      });
 //
    return (
        <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>You may also like</h2>
            <p>Some of our exclusive collection</p>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    )
  } else {
    return (<Fragment>
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2>You may also like</h2>
        <p>Some of our exclusive collection</p>
      </div>
      </Container>
    </Fragment>
    )
  }
}
}

export default SuggestedProduct