import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import appURL from "../../api/appURL";


class FeaturedProducts extends Component {

  constructor() {
    super();
    this.state={
      ProductData: [],
    }
  }

  componentDidMount() {
    axios.get(appURL.ProductListByType("featured"))
    .then(response => {
      this.setState({ProductData:response.data})
    })
    .catch()
  }

  render() {
    const featuredList = this.state.ProductData;
    const myView = featuredList.map((featuredList, i) => {
      if(featuredList.discount=="na"){
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link to={"/productdetails/" + featuredList.id}>
          <Card className="image-box card">
            <img
              className="center"
              src={featuredList.image}
              alt=""
            />
            <div class="card-body">
              <p className="product-name-on-card">{featuredList.title}</p>
              <p className="product-price-on-card">Price: ${featuredList.price}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </Card>
        </Link>
      </Col>
      } else {
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link to={"/productdetails/" + featuredList.id}>
          <Card className="image-box card">
            <img
              className="center"
              src={featuredList.image}
              alt=""
            />
            <div class="card-body">
              <p className="product-name-on-card">{featuredList.title}</p>
              <p className="product-price-on-card"><strike className="text-secondary">Price: ${featuredList.price}</strike></p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </Card>
        </Link>
      </Col>
      }
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Featured Product</h2>
            <p>Some of our exclusive collection</p>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
