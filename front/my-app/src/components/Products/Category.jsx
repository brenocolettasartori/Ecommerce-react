import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

class Category extends Component {
  render() {


    const myList = this.props.productData;
    const category = this.props.Category;
    const myView = myList.map((myList, i) => {
      if(myList.discount == "na"){
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to={"/productdetails/" + myList.id}>
          <Card className="image-box card w-100">
            <img
              className="center w-75"
              src={myList.image}
              alt=""
            />
            <div class="card-body">
              <p className="product-name-on-card">{myList.title}</p>
              <p className="product-price-on-card">Price: ${myList.price}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </Card>
        </Link>
      </Col>
      } else {
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to={"/productdetails/" + myList.id}>
          <Card className="image-box card">
            <img
              className="center"
              src={myList.image}
              alt=""
            />
            <div class="card-body">
              <p className="product-name-on-card">{myList.title}</p>
              <p className="product-price-on-card"><strike className="text-secondary">Price: ${myList.price}</strike></p>
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
        <div className="breadbody">
        <Breadcrumb>
          <Breadcrumb.Item> <StyledLink to="/"> Home </StyledLink></Breadcrumb.Item>
          <Breadcrumb.Item> <StyledLink to={"/recommended/" + category}> {category} </StyledLink></Breadcrumb.Item>   
        </Breadcrumb>
        </div>
        <div className="section-title text-center mb-55">
                <h2>{category}</h2>
            </div>
            <Row>
              {myView}
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Category