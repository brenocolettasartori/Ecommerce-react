import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import appURL from "../../api/appURL";
import axios from "axios";

class Collection extends Component {

  constructor() {
    super();
    this.state={
      ProductData: [],
    }
  }

  componentDidMount() {
    axios.get(appURL.ProductListByType("collection"))
    .then(response => {
      this.setState({ProductData:response.data})
    })
    .catch()
  }

  render() {

    const collectionList = this.state.ProductData;
    const myView = collectionList.map((collectionList, i) => {
      if(collectionList.discount=="na"){
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to={"/productdetails/" + collectionList.id}>
          <Card className="image-box card w-100">
            <img
              className="center w-75"
              src={collectionList.image}
              alt=""
            />
            <div class="card-body">
              <p className="product-name-on-card">{collectionList.title}</p>
              <p className="product-price-on-card">Price: ${collectionList.price}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </Card>
        </Link>
      </Col>
      } else {
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to={"/productdetails/" + collectionList.id}>
          <Card className="image-box card">
            <img
              className="center"
              src={collectionList.image}
              alt=""
            />
            <div class="card-body">
              <p className="product-name-on-card">{collectionList.title}</p>
              <p className="product-price-on-card"><strike className="text-secondary">Price: ${collectionList.price}</strike></p>
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
                <h2>Product Collection</h2>
                <p>Some of our exclusive collection</p>
            </div>
            <Row>
              {myView}
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Collection